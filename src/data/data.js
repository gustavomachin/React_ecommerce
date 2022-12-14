const products = [ 
  {
    id: 1,
    title: "Mermelada de Higo - El Brocal",
    discount: "20%",
    description: "Mermelada De Higo X420g - Sin Tacc Y Natural - El Brocal",
    price: 700,
    stock: 49,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_800395-MLA50936261928_072022-O.webp",
    
  },
  {
    id: 2,
    title: "Mermelada de Frutos Rojos - El Brocal",
    discount: "20%",
    description: "Mermelada De Frutos Rojos X420g Sin Tacc Y Sin Conservantes",
    price: 900,
    stock: 34,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_914352-MLA50935987763_072022-O.webp",
  },
  {
    id: 3,
    title: "Mermelada De Frutilla Light - El Brocal",
    discount: "20%",
    description: "Mermelada De Frutilla Light X 400g - Sin Tacc Y Natural - El Brocal",
    price: 1000,
    stock: 123,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_713935-MLA50952846092_082022-O.webp",
  },
  {
    id: 4,
    title: "Mermelada Frutilla - Patagonia Berries",
    description: "Mermelada Patagonia Berries Frutillas X 352 Gr - Patagonia",
    price: 1200,
    stock: 0,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_944459-MLA46544634992_062021-O.webp",
  },
  {
    id: 5,
    title: "Mermelada Arándanos - Patagonia Berries",
    description: "Mermelada Patagonia Berries Arándanos X 352 Gr",
    price: 1200,
    stock: 83,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_854827-MLA46544642262_062021-O.webp",
  },
  {
    id: 6,
    title: "Mermelada Damasco - St Dalfour",
    description: "Mermelada St Dalfour Damasco 284g Importada De Francia",
    price: 1600,
    stock: 50,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_937382-MLA43229068153_082020-O.webp",
  },
  {
    id: 7,
    title: "Mermelada Frutilla - St Dalfour",
    description: "Mermelada St Dalfour Frutilla 284g Importada De Francia",
    price: 1600,
    stock: 68,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_788692-MLA43229064568_082020-O.webp",
  },
  {
    id: 8,
    title: "Mermelada Cereza - St Dalfour",
    description: "Mermelada St Dalfour Cereza 284g Importada De Francia",
    price: 1600,
    stock: 70,
    category: "mermeladas",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_753728-MLA43471507637_092020-O.webp",
  },
  {
    id: 9,
    title: "Miel Cremosa - Beepure",
    description: "Miel Cremosa 900gr - Beepure",
    price: 1000,
    stock: 96,
    category: "mieles",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_938036-MLA51108324383_082022-O.webp",
  },
  {
    id: 10,
    title: "Miel Líquida - Beepure",
    description: "Miel Líquida 900gr - Beepure",
    price: 1000,
    stock: 96,
    category: "mieles",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_823821-MLA49972992300_052022-O.webp",
  },
  {
    id: 11,
    title: "Miel de Algarrobo - Norte Grande",
    description: "Miel Certificada Fair Trade Algarrobo 900gr",
    price: 13,
    stock: 65,
    category: "mieles",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_894154-MLA47634113956_092021-O.webp",
  },
  {
    id: 12,
    title: "Miel Multifloral - Norte Grande",
    description: "Miel Certificada Fair Trade Multifloral 900gr",
    price: 13,
    stock: 65,
    category: "mieles",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_614462-MLA47634270565_092021-O.webp",
  },
  {
    id: 13,
    title: "Miel Orgánica - Cosar",
    description:
      "Miel Orgánica Certificada Cosar Monte 500gr",
    price: 1000,
    stock: 61,
    category: "mieles",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_890883-MLA47661665403_092021-O.webp",
  },
  {
    id: 14,
    title: "Mix De Frutos Secos Especial",
    description: "Mix De Frutos Secos Especial Sin Pasas X 1kg. Almendras, castañas, maní, nueces",
    price: 2000,
    stock: 114,
    category: "secos",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_797410-MLA47696695910_092021-O.webp",
  },
  {
    id: 15,
    title: "Mix Frutos Secos + Energía",
    description: "Mix Frutos Secos + Energía X 1kg. Almendras, pasas de uva, chips de banana, nueces, maní",
    price: 1800,
    stock: 105,
    category: "secos",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_833051-MLA47713250648_092021-O.webp",
  },
  {
    id: 16,
    title: "Mix De Frutos Secos Premium",
    description: "Mix De Frutos Secos Premium X 1kg. Almendras, avellanas, castañas, nueces",
    price: 3000,
    stock: 110,
    category: "secos",
    imgurl: "https://http2.mlstatic.com/D_NQ_NP_979235-MLA50182585873_062022-O.webp",
  },
];

export default products;
