

export const productosMock = [
 
  {
    id: 1,
    nombre: "Smart TV LG 43'' 4K",
    descripcion: "Televisor inteligente LG con resolución 4K y WebOS.",
    precio: 400,
    stock: 10,
    categoria: 1,
    imagen: "https://picsum.photos/200/200?random=1&technology",
  },
  {
    id: 2,
    nombre: "Smart TV Samsung 50'' 4K UHD",
    descripcion: "Samsung con HDR y aplicaciones de streaming.",
    precio: 500,
    stock: 7,
    categoria: 1,
    imagen: "https://picsum.photos/200/200?random=2&technology",
  },
  {
    id: 3,
    nombre: "Smart TV Sony Bravia 55''",
    descripcion: "Sony Bravia con Android TV y control remoto por voz.",
    precio: 650,
    stock: 5,
    categoria: 1,
    imagen: "https://picsum.photos/200/200?random=3&technology",
  },
  {
    id: 4,
    nombre: "Smart TV Philips 40'' Full HD",
    descripcion: "Philips con Ambilight y resolución Full HD.",
    precio: 350,
    stock: 8,
    categoria: 1,
    imagen: "https://picsum.photos/200/200?random=4&technology",
  },
  {
    id: 5,
    nombre: "Smart TV Hisense 65'' 4K UHD",
    descripcion: "Hisense con Dolby Vision y Dolby Atmos.",
    precio: 600,
    stock: 6,
    categoria: 1,
    imagen: "https://picsum.photos/200/200?random=5&technology",
  },

  // Categoría 2: Consolas
  {
    id: 6,
    nombre: "PlayStation 5",
    descripcion: "Consola de nueva generación de Sony con soporte 4K.",
    precio: 600,
    stock: 5,
    categoria: 2,
    imagen: "https://picsum.photos/200/200?random=6&gaming",
  },
  {
    id: 7,
    nombre: "Xbox Series X",
    descripcion: "Consola de Microsoft con potencia de 12 teraflops.",
    precio: 550,
    stock: 4,
    categoria: 2,
    imagen: "https://picsum.photos/200/200?random=7&gaming",
  },
  {
    id: 8,
    nombre: "Nintendo Switch",
    descripcion: "Consola híbrida portátil y de sobremesa.",
    precio: 300,
    stock: 10,
    categoria: 2,
    imagen: "https://picsum.photos/200/200?random=8&gaming",
  },
  {
    id: 9,
    nombre: "PlayStation 4 Slim",
    descripcion: "Versión Slim de la popular consola de Sony.",
    precio: 250,
    stock: 6,
    categoria: 2,
    imagen: "https://picsum.photos/200/200?random=9&gaming",
  },
  {
    id: 10,
    nombre: "Xbox One S",
    descripcion: "Consola de Microsoft con lector Blu-ray 4K.",
    precio: 220,
    stock: 5,
    categoria: 2,
    imagen: "https://picsum.photos/200/200?random=10&gaming",
  },

  // Categoría 3: Cámaras Digitales
  {
    id: 11,
    nombre: "Canon EOS M50",
    descripcion: "Cámara sin espejo con sensor APS-C y grabación 4K.",
    precio: 700,
    stock: 4,
    categoria: 3,
    imagen: "https://picsum.photos/200/200?random=11&camera",
  },
  {
    id: 12,
    nombre: "Nikon D3500",
    descripcion: "Cámara DSLR con sensor de 24.2MP ideal para principiantes.",
    precio: 500,
    stock: 6,
    categoria: 3,
    imagen: "https://picsum.photos/200/200?random=12&camera",
  },
  {
    id: 13,
    nombre: "Sony Alpha a6000",
    descripcion: "Cámara mirrorless con enfoque automático rápido.",
    precio: 650,
    stock: 5,
    categoria: 3,
    imagen: "https://picsum.photos/200/200?random=13&camera",
  },
  {
    id: 14,
    nombre: "Panasonic Lumix G7",
    descripcion: "Cámara sin espejo con grabación de vídeo 4K.",
    precio: 600,
    stock: 3,
    categoria: 3,
    imagen: "https://picsum.photos/200/200?random=14&camera",
  },
  {
    id: 15,
    nombre: "GoPro Hero 9",
    descripcion: "Cámara de acción con estabilización avanzada y 5K.",
    precio: 400,
    stock: 8,
    categoria: 3,
    imagen: "https://picsum.photos/200/200?random=15&camera",
  },

  // Categoría 4: Smartphones
  {
    id: 16,
    nombre: "iPhone 13",
    descripcion: "Smartphone de Apple con chip A15 Bionic y doble cámara.",
    precio: 900,
    stock: 10,
    categoria: 4,
    imagen: "https://picsum.photos/200/200?random=16&smartphone",
  },
  {
    id: 17,
    nombre: "Samsung Galaxy S21",
    descripcion: "Flagship de Samsung con pantalla AMOLED de 120 Hz.",
    precio: 850,
    stock: 8,
    categoria: 4,
    imagen: "https://picsum.photos/200/200?random=17&smartphone",
  },
  {
    id: 18,
    nombre: "Xiaomi Mi 11",
    descripcion: "Teléfono con cámara de 108 MP y carga rápida de 55W.",
    precio: 700,
    stock: 12,
    categoria: 4,
    imagen: "https://picsum.photos/200/200?random=18&smartphone",
  },
  {
    id: 19,
    nombre: "Google Pixel 6",
    descripcion: "Smartphone con Android puro y potente cámara dual.",
    precio: 800,
    stock: 6,
    categoria: 4,
    imagen: "https://picsum.photos/200/200?random=19&smartphone",
  },
  {
    id: 20,
    nombre: "OnePlus 9 Pro",
    descripcion: "Pantalla Fluid AMOLED y carga inalámbrica ultrarrápida.",
    precio: 750,
    stock: 5,
    categoria: 4,
    imagen: "https://picsum.photos/200/200?random=20&smartphone",
  },

  // Categoría 5: Notebooks
  {
    id: 21,
    nombre: "MacBook Air M1",
    descripcion: "Portátil Apple con procesador M1 y gran autonomía.",
    precio: 1000,
    stock: 4,
    categoria: 5,
    imagen: "https://picsum.photos/200/200?random=21&laptop",
  },
  {
    id: 22,
    nombre: "Dell XPS 13",
    descripcion: "Ultrabook con pantalla InfinityEdge y diseño premium.",
    precio: 1200,
    stock: 3,
    categoria: 5,
    imagen: "https://picsum.photos/200/200?random=22&laptop",
  },
  {
    id: 23,
    nombre: "HP Pavilion 15",
    descripcion: "Laptop con procesador Intel Core i7 y gráfica integrada.",
    precio: 750,
    stock: 7,
    categoria: 5,
    imagen: "https://picsum.photos/200/200?random=23&laptop",
  },
  {
    id: 24,
    nombre: "Lenovo IdeaPad 5",
    descripcion: "Portátil con Ryzen 5 y diseño liviano para uso diario.",
    precio: 700,
    stock: 8,
    categoria: 5,
    imagen: "https://picsum.photos/200/200?random=24&laptop",
  },
  {
    id: 25,
    nombre: "ASUS ZenBook 14",
    descripcion: "Ultrabook con pantalla NanoEdge y gran autonomía.",
    precio: 900,
    stock: 5,
    categoria: 5,
    imagen: "https://picsum.photos/200/200?random=25&laptop",
  },
];
