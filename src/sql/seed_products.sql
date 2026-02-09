-- Create default category if it doesn't exist
INSERT INTO categories (name, display_order)
VALUES ('Regalos y Detalles', 1)
ON CONFLICT (name) DO NOTHING;

-- Insert products
-- Note: We use a subquery to get the category_id for 'Regalos y Detalles'
-- Assuming images are stored in public/products/imageX.jpeg, so URL is /products/imageX.jpeg

INSERT INTO products (name, description, price, image_url, category_id, in_stock)
VALUES
(
  'Caja Sorpresa Amor',
  'Deliciosa combinación de dulces y chocolates en una caja decorada con motivos románticos, perfecta para endulzar el día de tu persona especial.',
  35000,
  '/products/image0.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Desayuno Romántico Deluxe',
  'Un despertar mágico con sandwich gourmet, jugo natural, frutas frescas y un pequeño arreglo floral, todo en una bandeja lista para servir.',
  85000,
  '/products/image1.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Bouquet de Rosas y Ferrero',
  'La elegancia de las rosas rojas combinada con la dulzura de los bombones Ferrero Rocher, un clásico que nunca falla.',
  60000,
  '/products/image2.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Osito tierno con chocolates',
  'Un suave peluche de 25cm acompañado de una selección de chocolatinas premium, el detalle más tierno para expresar tu cariño.',
  45000,
  '/products/image3.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Ancheta Dulce Tentación',
  'Canasta artesanal repleta de snacks importados, bebidas refrescantes y gomitas dulces, ideal para compartir una tarde de películas.',
  55000,
  '/products/image4.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Detalle Floral Minimalista',
  'Un hermoso arreglo pequeño con gerberas y follaje verde, presentado en una base moderna, perfecto para escritorios o mesas de noche.',
  25000,
  '/products/image5.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
),
(
  'Pack de Fresas con Chocolate',
  'Caja con 6 fresas frescas cubiertas de chocolate semiamargo y chocolate blanco con toppings variados, una explosión de sabor.',
  15000,
  '/products/image6.jpeg',
  (SELECT id FROM categories WHERE name = 'Regalos y Detalles' LIMIT 1),
  true
)
ON CONFLICT (name) DO UPDATE 
SET 
  description = EXCLUDED.description,
  price = EXCLUDED.price,
  image_url = EXCLUDED.image_url,
  in_stock = EXCLUDED.in_stock;
