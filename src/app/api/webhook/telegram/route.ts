import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Environment variables
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize Supabase Admin Client
// Note: This requires SUPABASE_SERVICE_ROLE_KEY to be set in .env.local
const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Types
type BotState =
  | "IDLE"
  | "AWAITING_NAME"
  | "AWAITING_PRICE"
  | "AWAITING_CATEGORY";

interface TelegramUpdate {
  update_id: number;
  message?: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
    };
    chat: {
      id: number;
      type: string;
    };
    date: number;
    text?: string;
    photo?: {
      file_id: string;
      file_unique_id: string;
      width: number;
      height: number;
      file_size: number;
    }[];
  };
}

// Helpers
async function sendMessage(chatId: number, text: string) {
  if (!TELEGRAM_BOT_TOKEN) return;
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

async function getFileUrl(fileId: string): Promise<string | null> {
  if (!TELEGRAM_BOT_TOKEN) return null;
  const res = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`,
  );
  const data = await res.json();
  if (!data.ok) return null;
  return `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${data.result.file_path}`;
}

async function uploadImageToSupabase(
  fileUrl: string,
  fileName: string,
): Promise<string | null> {
  try {
    const res = await fetch(fileUrl);
    const blob = await res.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data, error } = await supabase.storage
      .from("catalog-images") // Assumes bucket exists
      .upload(fileName, buffer, {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (error) {
      console.error("Supabase upload error:", error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("catalog-images")
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  } catch (e) {
    console.error("Image upload failed:", e);
    return null;
  }
}

// Main Webhook Handler
export async function POST(req: Request) {
  try {
    const update: TelegramUpdate = await req.json();

    console.log("📥 Mensaje Recibido:", JSON.stringify(update, null, 2));
    console.log(
      "🔐 Check Vars: TOKEN?",
      !!TELEGRAM_BOT_TOKEN,
      "SUPABASE?",
      !!SUPABASE_SERVICE_ROLE_KEY,
    );

    // Immediate 200 OK to Telegram
    if (!update.message) {
      return NextResponse.json({ ok: true });
    }

    const chatId = update.message.chat.id;

    // 1. Verify Owner & Connection
    console.log("🔍 Consultando tg_owner_id en DB...");
    const { data: config, error: configError } = await supabase
      .from("config")
      .select("tg_owner_id, current_state, draft_product")
      .single();

    if (configError || !config) {
      console.error("Config fetch error:", configError);
      return NextResponse.json({ ok: true });
    }

    console.log("✅ Config found. Owner ID:", config.tg_owner_id);

    if (String(config.tg_owner_id) !== String(update.message.from.id)) {
      console.warn("Unauthorized access attempt:", update.message.from.id);
      await sendMessage(
        chatId,
        `⚠️ Acceso denegado. Tu ID es ${update.message.from.id}. Regístralo en Supabase.`,
      );
      return NextResponse.json({ ok: true });
    }

    let currentState: BotState = (config.current_state as BotState) || "IDLE";
    let draft = config.draft_product || {};

    // Handle Commands
    if (update.message.text === "/start" || update.message.text === "/cancel") {
      await supabase
        .from("config")
        .update({ current_state: "IDLE", draft_product: {} })
        .eq("tg_owner_id", config.tg_owner_id);

      await sendMessage(
        chatId,
        "Estado reiniciado. Envía una foto para comenzar.",
      );
      return NextResponse.json({ ok: true });
    }

    if (update.message.text === "/status") {
      const { count, error: countError } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });

      if (countError) {
        throw new Error(`DB Count Error: ${countError.message}`);
      }

      await sendMessage(
        chatId,
        `✅ ¡ValentinasGift_bot Conectado! Columna de estado detectada y operativa. Productos: ${count}.`,
      );
      return NextResponse.json({ ok: true });
    }

    // FSM Logic
    switch (currentState) {
      case "IDLE":
        if (update.message.photo) {
          // Get largest photo
          const photo = update.message.photo[update.message.photo.length - 1];
          const fileUrl = await getFileUrl(photo.file_id);

          if (fileUrl) {
            const fileName = `${Date.now()}.jpg`;
            const publicUrl = await uploadImageToSupabase(fileUrl, fileName);

            if (publicUrl) {
              draft = { ...draft, image_url: publicUrl };
              currentState = "AWAITING_NAME";
              await sendMessage(
                chatId,
                "📸 ¡Foto recibida! Ahora dime, ¿cuál es el nombre de este regalo?",
              );
            } else {
              await sendMessage(
                chatId,
                "Error subiendo la imagen. Intenta de nuevo.",
              );
            }
          } else {
            await sendMessage(chatId, "No se pudo descargar la imagen.");
          }
        } else {
          await sendMessage(chatId, "Por favor, envía una foto para empezar.");
        }
        break;

      case "AWAITING_NAME":
        if (update.message.text) {
          draft = { ...draft, name: update.message.text };
          currentState = "AWAITING_PRICE";
          await sendMessage(
            chatId,
            `Nombre: ${update.message.text}. Ahora, ¿cuál es el precio?`,
          );
        } else {
          await sendMessage(chatId, "Por favor envía el nombre como texto.");
        }
        break;

      case "AWAITING_PRICE":
        if (update.message.text) {
          const price = parseFloat(update.message.text);
          if (!isNaN(price)) {
            draft = { ...draft, price: price };
            currentState = "AWAITING_CATEGORY";
            await sendMessage(
              chatId,
              `Precio: ${price}. ¿Cuál es la categoría? (Escribe el nombre de la categoría)`,
            );
          } else {
            await sendMessage(chatId, "Por favor envía un número válido.");
          }
        }
        break;

      case "AWAITING_CATEGORY":
        if (update.message.text) {
          const category = update.message.text;
          // Finalize
          const newProduct = {
            name: draft.name,
            price: draft.price,
            image_url: draft.image_url,
            category: category,
            in_stock: true,
          };

          const { error: insertError } = await supabase
            .from("products")
            .insert(newProduct);

          if (insertError) {
            console.error("Insert error:", insertError);
            throw new Error(`Error guardando producto: ${insertError.message}`);
          } else {
            await sendMessage(chatId, "✅ Producto guardado con éxito");
            currentState = "IDLE";
            draft = {};
          }
        }
        break;

      default:
        currentState = "IDLE";
        break;
    }

    // Update State
    const { error: updateError } = await supabase
      .from("config")
      .update({ current_state: currentState, draft_product: draft })
      .eq("tg_owner_id", config.tg_owner_id);

    if (updateError) {
      throw new Error(`Error actualizando estado: ${updateError.message}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("❌ Error en Webhook:", error);

    // Attempt to notify user if we have a chat ID in the payload context
    // We have to re-parse or rely on scope.
    // Since 'chatId' is scoped in try block, we might not access it here if error happened before.
    // However, we can try to extract it safely or just console log if we can't contextually reply.
    // Given the structure, let's try to grab it from the request body again if needed,
    // but the request stream is consumed.
    // Better practice: Wrap the main logic in a function or access a wider scope variable.
    // For now, to keep it simple and given the function structure:
    try {
      const payload = await req.clone().json();
      if (payload?.message?.chat?.id) {
        await sendMessage(
          payload.message.chat.id,
          `⚠️ Error del sistema: ${error.message || error}`,
        );
      }
    } catch (e) {
      // Failed to recover chat ID
    }

    return NextResponse.json({ ok: true });
  }
}
