export const MOCK_CONFIG = {
  id: 1,
  store_name: "Regalitos Valentina's",
  whatsapp_number: "573001234567", // Replace with real number if available
};

export const MOCK_CATEGORIES = [
  { id: 1, name: "Calzado", display_order: 1 },
  { id: 2, name: "Cinturones", display_order: 2 },
  { id: 3, name: "Relojes", display_order: 3 },
  { id: 4, name: "Gafas", display_order: 4 },
  { id: 5, name: "Gorras", display_order: 5 },
  { id: 6, name: "Ropa", display_order: 6 },
  { id: 7, name: "Bolsos", display_order: 7 },
];

export const MOCK_PRODUCTS = [
  // --- EXISTING ITEMS (Remapped to new categories where possible or kept as Exclusivo) ---
  {
    id: 1,
    name: "Vestido Camisero Monograma Gold",
    description:
      "Elegante vestido con estampado ocre y negro sobre fondo café satinado.",
    price: 85.0,
    image_url: "/products/image0.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 2,
    name: "Camisa Oversize Denim Monograma",
    description:
      "Denim azul oscuro de alta calidad con silueta oversize y detalles de monograma.",
    price: 65.0,
    image_url: "/products/image1.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 3,
    name: "Camisa 'Cold Shoulder' con Ribete",
    description: "Diseño moderno con hombros descubiertos y ribete distintivo.",
    price: 55.0,
    image_url: "/products/image2.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 4,
    name: "Blusa Ligera con Franja de Lujo",
    description:
      "Tejido fluido y ligero con franja inspirada en el lujo deportivo.",
    price: 45.0,
    image_url: "/products/image3.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 5,
    name: "Camisa de Cuadros 'Big Check' Ebony",
    description: "Padrón de cuadros grandes en negro, gris y blanco.",
    price: 50.0,
    image_url: "/products/image4.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 6,
    name: "Camisa de Cuadros 'Big Check' Ocean",
    description: "Vibrante combinación de azul real, cielo y marino.",
    price: 50.0,
    image_url: "/products/image5.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 7,
    name: "Camisa 'Big Check' Classic Beige",
    description: "Tonalidad beige arena clásica con patrón de cuadros.",
    price: 55.0,
    image_url: "/products/image6.jpeg",
    category_id: 6,
    in_stock: true,
  },
  // --- SWIMWEAR (Remapped to Exclusivo/Ropa for now as per categories) ---
  {
    id: 8,
    name: "Set de Bikini Alexander Wang - Electric Orange",
    description:
      "Impactante set de bikini en naranja neón con detalles de cristales.",
    price: 120.0,
    image_url: "/products/image7.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 9,
    name: "Body Alo Yoga 'Contrast Border'",
    description: "Elegante body negro con bordes blancos contrastantes.",
    price: 68.0,
    image_url: "/products/image8.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 10,
    name: "Traje de Baño Alo Yoga 'Crystal Logo'",
    description:
      "Traje de baño entero en negro mate con incrustaciones de cristales.",
    price: 85.0,
    image_url: "/products/image9.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 11,
    name: "Bikini Triangle 'Vintage Check'",
    description: "Bikini clásico de triángulo con patrón de cuadros vintage.",
    price: 75.0,
    image_url: "/products/image10.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 12,
    name: "Bikini Triangle 'Essential White'",
    description: "Bikini triángulo en blanco puro con logo distintivo.",
    price: 110.0,
    image_url: "/products/image11.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 13,
    name: "Bañador Triquini Monograma Gris",
    description: "Moderno triquini con estampado de monograma en gris.",
    price: 95.0,
    image_url: "/products/image12.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 14,
    name: "Set de Baño 'Dior Oblique' Duo",
    description: "Exclusivo set de bikini y short a juego con patrón Oblique.",
    price: 150.0,
    image_url: "/products/image13.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 15,
    name: "Conjuntos de Descanso Tom Ford",
    description: "Conjunto de descanso premium, comodidad suprema.",
    price: 80.0,
    image_url: "/products/image14.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 16,
    name: "Bañador Cut-out 'Medusa Gold'",
    description: "Bañador negro con cortes asimétricos y medallón dorado.",
    price: 130.0,
    image_url: "/products/image15.jpeg",
    category_id: 6,
    in_stock: true,
  },
  {
    id: 17,
    name: "Mono Corto 'Active Sculpt'",
    description: "Enterizo corto que esculpe la figura, look deportivo chic.",
    price: 70.0,
    image_url: "/products/image16.jpeg",
    category_id: 6,
    in_stock: true,
  },

  // --- NEW LUXURY ITEMS (23-29) ---
  {
    id: 23,
    name: "Mocasines Louis Vuitton 'Driver Monogram'",
    description:
      "Elegancia atemporal con el icónico canvas Monogram. Confección artesanal y comodidad superior para el hombre moderno.",
    price: 50.0,
    image_url: "/products/image23.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 24,
    name: "Cinturón Louis Vuitton 'Holographic LV'",
    description:
      "Hebilla LV con acabado holográfico sobre piel negra premium. Un accesorio audaz que define el lujo contemporáneo.",
    price: 40.0,
    image_url: "/products/image24.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 25,
    name: "Cinturón Versace 'Medusa Heritage'",
    description:
      "La legendaria cabeza de Medusa en dorado sobre piel italiana. Símbolo de poder y sofisticación.",
    price: 40.0,
    image_url: "/products/image25.jpeg",
    category_id: 2, // Cinturón
    in_stock: true,
  },
  {
    id: 26,
    name: "Sandalias de Pala Dolce & Gabbana 'DG Logo'",
    description:
      "Diseño minimalista con el logo DG en relieve. Perfectas para un look relajado pero inconfundiblemente lujoso.",
    price: 50.0,
    image_url: "/products/image26.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 27,
    name: "Flip-Flops Louis Vuitton 'Starboard Thong'",
    description:
      "Comodidad y estilo veraniego con el toque distintivo de la Maison. Suela ergonómica y tiras con monograma.",
    price: 50.0,
    image_url: "/products/image27.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 28,
    name: "Sandalias de Pala D&G 'DG Logo' (Variante)",
    description:
      "Variante exclusiva de las sandalias DG, combinando confort y diseño de alta costura.",
    price: 50.0,
    image_url: "/products/image28.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 29,
    name: "Sandalias de Plataforma Hermès 'Eze 30'",
    description:
      "Elevación y estilo con la icónica 'H' de Hermès. Plataforma cómoda para un andar sofisticado.",
    price: 50.0,
    image_url: "/products/image29.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },

  // --- ITEMS 30-35 (Expanded Catalog) ---
  {
    id: 30,
    name: "Celine 'Triomphe Slide'",
    description:
      "Elegancia minimalista con el emblema Triomphe en cuero tabaco y negro. Un clásico moderno para el armario de lujo.",
    price: 50.0,
    image_url: "/products/image30.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 31,
    name: "Dior 'Dway Toile de Jouy'",
    description:
      "La icónica mule Dway bordada con el motivo Toile de Jouy y la firma 'Christian Dior'. Artesanía excepcional.",
    price: 50.0,
    image_url: "/products/image31.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 32,
    name: "Gucci x Disney 'Mickey Mouse Belt'",
    description:
      "Colaboración exclusiva en lona GG Supreme con ilustración de Mickey Mouse. Un toque lúdico al lujo tradicional.",
    price: 40.0,
    image_url: "/products/image32.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 33,
    name: "Salvatore Ferragamo 'Gancini'",
    description:
      "Piel negra reversible con la hebilla doble Gancini en acabado dorado. Símbolo de estatus y refinamiento italiano.",
    price: 40.0,
    image_url: "/products/image33.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 34,
    name: "Gucci 'Denim GG Marmont'",
    description:
      "Tejido denim con el logo GG en relieve y hebilla de doble G en oro envejecido. Estilo casual de lujo.",
    price: 40.0,
    image_url: "/products/image34.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 35,
    name: "Gucci 'Black Canvas Marmont'",
    description:
      "Lona negra texturizada con la emblemática hebilla GG. Versatilidad y distinción para cualquier outfit.",
    price: 40.0,
    image_url: "/products/image35.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },

  // --- ITEMS 36-41 (Final Expansion) ---
  {
    id: 36,
    name: "Gucci 'GG Flora Collection' (Blue/Green)",
    description:
      "Lona Supreme GG con vibrantes estampados florales en tonos azul y verde. Un homenaje a la naturaleza y el legado de la firma.",
    price: 40.0,
    image_url: "/products/image36.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 37,
    name: "Gucci 'GG Flora Collection' (Pink/Fuchsia)",
    description:
      "La icónica lona GG adornada con flores en rosa y fucsia. Femenino, romántico y audazmente Gucci.",
    price: 40.0,
    image_url: "/products/image37.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  {
    id: 38,
    name: "Dior 'Riviera Edition' Mule",
    description:
      "Edición Riviera en Toile de Jouy neutro con la firma 'Christian Dior' bordada. Elegancia relajada para el resort.",
    price: 50.0,
    image_url: "/products/image38.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 39,
    name: "Gucci 'Jumbo GG' Platform Slide",
    description:
      "Maxi monograma Jumbo GG sobre una silueta de plataforma moderna. Suela de caucho robusta y estilo urbano de lujo.",
    price: 50.0,
    image_url: "/products/image39.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 40,
    name: "Coach 'Jacquard Signature' Slide",
    description:
      "Azul marino profundo en tejido Jacquard Signature con el herraje 'C' dorada. Sofisticación clásica americana.",
    price: 50.0,
    image_url: "/products/image40.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 41,
    name: "Dolce & Gabbana 'Crossed DG' Belt",
    description:
      "Piel negra lisa con la icónica hebilla DG cruzada en acabado metálico. El equilibrio perfecto entre modernidad y tradición.",
    price: 40.0,
    image_url: "/products/image41.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },

  // --- ITEMS 42-46 (Catalog Expansion III) ---
  {
    id: 42,
    name: "D&G 'Portofino Leather' Sneaker",
    description:
      "Piel de becerro negra premium con el logo Dolce & Gabbana en contraste blanco en la suela. Lujo deportivo.",
    price: 50.0,
    image_url: "/products/image42.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 43,
    name: "Gucci 'Denim Monogram' Platform",
    description:
      "Plataforma robusta en denim oscuro con el patrón GG en relieve. Un diseño audaz que combina textura y logomanía.",
    price: 50.0,
    image_url: "/products/image43.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 44,
    name: "Hermès 'Oran Leather' Sandal (Gold)",
    description:
      "El icónico tono Gold (marrón) en piel de becerro con la pala 'H' y costuras blancas contrastantes. La definición de atemporalidad.",
    price: 50.0,
    image_url: "/products/image44.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 45,
    name: "Fendi 'Roma Straw' Slide",
    description:
      "Artesanía en fibra trenzada y rafia con el logo Fendi Roma bordado en café. Elegancia natural y sofisticada.",
    price: 50.0,
    image_url: "/products/image45.jpeg",
    category_id: 1, // Calzado
    in_stock: true,
  },
  {
    id: 46,
    name: "Tory Burch 'Reversible Miller' Belt",
    description:
      "Versatilidad en piel negra reversible con la hebilla doble T en acabado dorado. Dos looks en un solo accesorio de lujo.",
    price: 40.0,
    image_url: "/products/image46.jpeg",
    category_id: 2, // Cinturones
    in_stock: true,
  },
  
  // --- SETS (User additions) ---
  {
    id: 47,
    name: "Set Burberry London",
    description: "Este set destaca por su elegancia clásica y el icónico patrón de cuadros. Incluye: Cinturón, billetera y caja de presentación.",
    price: 70.0,
    image_url: "/products/correa-burberry.webp",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 48,
    name: "Set Coach New York",
    description: "Un diseño sobrio y moderno en color negro mate con detalles en gris Oxford. Incluye: Cinturón, billetera y caja rígida premium.",
    price: 70.0,
    image_url: "/products/correachoch.webp",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 49,
    name: "Set Gucci Signature",
    description: "El máximo exponente de la moda italiana. Incluye: Cinturón con hebilla de doble 'G', billetera triclor y caja de lujo.",
    price: 70.0,
    image_url: "/products/correa-guchi.webp",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 50,
    name: "Set Lacoste Essential",
    description: "Minimalismo y elegancia deportiva. Incluye: Cinturón de cuero liso con hebilla reversible, billetera y estuche minimalista.",
    price: 70.0,
    image_url: "/products/correa-lacost.webp",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 51,
    name: "Set Louis Vuitton Damier",
    description: "El diseño Damier Infini es un referente de estilo global. Incluye: Cinturón texturizado, billetera a cuadros y caja naranja.",
    price: 70.0,
    image_url: "/products/correa-luivuton.webp",
    category_id: 2,
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 3) ---
  {
    id: 52,
    name: "Duo Hermes Paris Premium",
    description: "Exclusivo set de cinturones con la icónica hebilla en forma de \"H\". Presenta dos acabados de lujo: uno en oro rosa brillante y otro en negro mate. Cuero textura Togo, reversible.",
    price: 45.0,
    image_url: "/products/image47.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 53,
    name: "Louis Vuitton Monogram Embossed",
    description: "Cinturón de gala en cuero negro con patrón Monogram grabado. Imponente hebilla circular dorada con logo LV calado. Ideal para eventos formales.",
    price: 45.0,
    image_url: "/products/image48.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 54,
    name: "Valentino Garavani Reversible Edition",
    description: "Diseño audaz que combina negro y rojo Valentino. Hebilla VLogo en oro envejecido. Sistema reversible para alternar estilos.",
    price: 45.0,
    image_url: "/products/image49.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 55,
    name: "Chanel Classique Noir",
    description: "Máxima expresión de elegancia. Cinturón de cuero liso en negro profundo con hebilla doble \"C\" en dorado pulido. Distinción minimalista.",
    price: 45.0,
    image_url: "/products/image50.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 56,
    name: "Coach Signature Buckle Grey",
    description: "Estilo ejecutivo con patrón \"C\" grabado en tonos grises. Hebilla de placa metálica tipo \"Gunmetal\" con el logo del carruaje Coach en relieve.",
    price: 45.0,
    image_url: "/products/image51.jpeg",
    category_id: 2,
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 4: image52 - image59) ---
  {
    id: 57,
    name: "Set Louis Vuitton Damier Ebene Premium",
    description: "Conjunto con cinturón reversible Damier Ebene/liso negro, billetera a juego y elegante hebilla dorada LV. Incluye caja y certificado.",
    price: 50.0,
    image_url: "/products/image52.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 58,
    name: "Set Louis Vuitton Monogram Noir",
    description: "Cinturón de cuero negro con patrón Monogram grabado y hebilla circular dorada LV. Viene con billetera y llavero. En caja naranja emblemática.",
    price: 50.0,
    image_url: "/products/image53.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 59,
    name: "Set Gucci Signature Black",
    description: "Cinturón de cuero negro monogram y hebilla de doble 'G'. Billetera a juego con cinta verde y roja. Incluye caja de lujo y certificado.",
    price: 50.0,
    image_url: "/products/image54.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 60,
    name: "Set Louis Vuitton Monogram Gold Buckle",
    description: "Cinturón de cuero negro con patrón Monogram grabado y hebilla rectangular dorada LV. Billetera a juego, caja y documentos de la marca.",
    price: 50.0,
    image_url: "/products/image55.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 61,
    name: "Set Louis Vuitton Damier Graphite Silver Buckle",
    description: "Cinturón reversible Damier Graphite/negro liso con hebilla plateada cepillada LV. Incluye billetera a juego y caja de presentación.",
    price: 50.0,
    image_url: "/products/image56.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 62,
    name: "Set Louis Vuitton Monogram Bifold Wallet & Belt",
    description: "Cinturón de cuero negro Monogram grabado con hebilla rectangular dorada LV. Billetera bifold con múltiples compartimentos, caja y certificado.",
    price: 50.0,
    image_url: "/products/image57.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 63,
    name: "Set Louis Vuitton Monogram Reversible Gold Buckle",
    description: "Cinturón reversible Monogram tallado/liso negro con hebilla rectangular dorada LV. Incluye billetera compacta y caja de presentación.",
    price: 50.0,
    image_url: "/products/image58.jpeg",
    category_id: 2,
    in_stock: true,
  },
  {
    id: 64,
    name: "Set Louis Vuitton Monogram Bifold Wallet & Belt (Alternativo)",
    description: "Cinturón cuero negro Monogram grabado y hebilla rectangular dorada LV. Billetera alternativa tipo bifold para funcionalidad y estilo. Incluye caja y certificado.",
    price: 50.0,
    image_url: "/products/image59.jpeg",
    category_id: 2,
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 5: Bolsos image60 - image65) ---
  {
    id: 65,
    name: "Bao Bao Issey Miyake Prism Box Bag",
    description: "Bolso de mano vanguardista geométrico tipo caja negra mate que cambia de forma. Asa superior minimalista.",
    price: 50.0,
    image_url: "/products/image60.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 66,
    name: "Kurt Geiger Kensington Rainbow Bag",
    description: "Bolso de hombro llamativo con rayas metalizadas (arcoíris). Cierre con cabeza de águila y cristales, correa de cadena oscura.",
    price: 50.0,
    image_url: "/products/image61.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 67,
    name: "Prada Nylon Backpack Black",
    description: "Mochila clásica Prada en nailon negro resistente. Logotipo triangular esmaltado frontal y bolsillo con cremallera. Básico de lujo.",
    price: 50.0,
    image_url: "/products/image62.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 68,
    name: "Louis Vuitton Speedy Cherry Edition",
    description: "Bolso Speedy en lona Monogram con estampado Cherry (Takashi Murakami). Detalles en cuero natural y dije de lazo rosa.",
    price: 50.0,
    image_url: "/products/image63.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 69,
    name: "Louis Vuitton Monogram Clutch Bag",
    description: "Elegante sobre o clutch en lona Monogram tradicional con ribete de cuero negro. Diseño plano ideal para eventos formales. Incluye caja de lujo.",
    price: 50.0,
    image_url: "/products/image64.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 70,
    name: "Saint Laurent Rive Gauche Raffia Tote",
    description: "Bolso tote de rafia negra con la inscripción 'RIVE GAUCHE SAINT LAURENT' bordada. Detalle logo YSL lateral dorado. Asas dobles.",
    price: 50.0,
    image_url: "/products/image65.jpeg",
    category_id: 7,
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 6: Mega Set image66) ---
  {
    id: 71,
    name: "Mega Set Louis Vuitton Damier Ebene (5 Piezas)",
    description: "Conjunto definitivo de 5 piezas en lona Damier Ebene con detalles rojo borgoña. Incluye Tote, bandolera, mini Speedy, cosmetiquera y billetera.",
    price: 160.0,
    image_url: "/products/image66.jpeg",
    category_id: 7, // Bolsos
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 7: image67 - image75) ---
  {
    id: 72,
    name: "Loewe Puzzle Fold Pouch Set",
    description: "Elegante bolso compacto en cuero premium gris nube. Logotipo Loewe en relieve, herrajes plateados y correa ajustable. Estilo bandolera minimalista.",
    price: 70.0,
    image_url: "/products/image67.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 73,
    name: "Mega Set Louis Vuitton Monogram Multicolor (4 Piezas)",
    description: "Colección homenaje Multicolor. Incluye Tote Neverfull, Speedy mini, sobre y billetera larga. Monograma en colores vibrantes sobre blanco.",
    price: 70.0,
    image_url: "/products/image68.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 74,
    name: "Set Louis Vuitton Monogram Metis & Noé Mini (3 Piezas)",
    description: "Combinación versátil: bolso Metis con solapa, mini Noé bucket bag y billetera compacta. Lona Monogram clásica, herrajes de lujo.",
    price: 70.0,
    image_url: "/products/image69.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 75,
    name: "Set Coach Willow & Slim Crossbody (3 Piezas)",
    description: "Cuero granulado negro. Incluye Tote, bandolera con solapa Signature y billetera larga con logo 'C' dorado. Equilibrio perfecto y sofisticado.",
    price: 70.0,
    image_url: "/products/image70.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 76,
    name: "Set Gucci Dionysus & Bucket Bag (3 Piezas)",
    description: "Incluye bolso cubo con cordón, bandolera Dionysus con hebilla tigre y billetera pequeña. Lona GG Supreme y acabados en cuero marrón.",
    price: 70.0,
    image_url: "/products/image71.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 77,
    name: "Set Louis Vuitton Transparent & Monogram Mix (4 Piezas)",
    description: "Tote translúcido ahumado, neceser transparente, Papillon en lona Monogram con monedero acoplado y billetera plana. Diseño innovador y vanguardista.",
    price: 70.0,
    image_url: "/products/image72.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 78,
    name: "Set Gucci Padlock & Marmont Duo (3 Piezas)",
    description: "Bolso Padlock con solapa negra, bandolera Marmont GG dorada y billetera compacta. Lujo, elegancia y lo mejor de la casa italiana.",
    price: 70.0,
    image_url: "/products/image73.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 79,
    name: "Set Coach Tabby Cream & Signature (3 Piezas)",
    description: "Set color crema y caqui. Bolso Tabby con logo 'C', bandolera pequeña con cadena y billetera tipo sobre. Diseño limpio, lujoso y especial.",
    price: 70.0,
    image_url: "/products/image74.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 80,
    name: "Set Louis Vuitton Neverfull Cherry Edition (4 Piezas)",
    description: "Edición especial cerezas sobre Monogram. Tote Neverfull (interior rosa), Speedy mini, sobre plano y billetera pequeña. Acabados en cuero natural.",
    price: 70.0,
    image_url: "/products/image75.jpeg",
    category_id: 7,
    in_stock: true,
  },
  
  // --- NEW ITEMS (Batch 8: image76 - image83) ---
  {
    id: 81,
    name: "Valentino Garavani Locò Fuchsia Shoulder Bag",
    description: "Vibrante color fucsia con herraje frontal VLogo dorado. Piel napa suave y elegante correa de cadena dorada. Diseño estructurado.",
    price: 90.0,
    image_url: "/products/image76.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 82,
    name: "Set Tory Burch T Monogram Tote (3 Piezas)",
    description: "Tote de lona tejida azul marino y crema (36x27x12 cm) con patrón acolchado, asas de cuero, billetera larga y sobre pequeño.",
    price: 90.0,
    image_url: "/products/image77.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 83,
    name: "Dior Saddle Bag Black Leather Edition",
    description: "Cuero negro profundo con cierre magnético 'D' y firma 'CD'. Correa de lona ancha bordada 'Christian Dior'. Look moderno.",
    price: 90.0,
    image_url: "/products/image78.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 84,
    name: "Hermes Constance Shoulder Bag Red",
    description: "Cuero Epsom rojo intenso y emblemática hebilla en 'H' dorada brillante. Incluye caja de lujo y documentos de autenticidad.",
    price: 90.0,
    image_url: "/products/image79.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 85,
    name: "Fendi Baguette Monogram Brown",
    description: "Cuero marrón chocolate con patrón 'FF' en relieve y hebilla metálica dorada frontal. Correa de cadena al hombro.",
    price: 90.0,
    image_url: "/products/image80.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 86,
    name: "Louis Vuitton Bumbag Classic Monogram",
    description: "Lona Monogram clásica, diseño ergonómico cruzado al pecho o cintura. Asa de mano en cuero natural. Confort de alta costura.",
    price: 90.0,
    image_url: "/products/image81.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 87,
    name: "Dior Saddle Bag Oblique Embroidery",
    description: "Clásico bordado Oblique azul marino/beige. Acabados en cuero negro y herrajes dorados con letra 'D'. Atemporal y artístico.",
    price: 90.0,
    image_url: "/products/image82.jpeg",
    category_id: 7,
    in_stock: true,
  },
  {
    id: 88,
    name: "Chanel Drawstring Bucket Bag Beige",
    description: "Cuero acolchado color beige crema. Bolso tipo cubo (cordón), broche doble 'C' y correa de cadena entrelazada con cuero.",
    price: 90.0,
    image_url: "/products/image83.jpeg",
    category_id: 7,
    in_stock: true,
  }
];
