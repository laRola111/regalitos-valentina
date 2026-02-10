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
];
