// ===== DADOS DOS PRODUTOS =====
const products = [
  // ===== MASCULINO - CAMISETAS =====
  {
    id: 1,
    name: "Camiseta Flamengo 2024/25",
    category: "camisetas",
    gender: "masculino",
    price: 299.90,
    oldPrice: 349.90,
    emoji: "🔴",
    image: "img/camiseta1.jpg",
    badge: "Mais vendido",
    description: "Camiseta oficial do Flamengo temporada 2024/25"
  },
  {
    id: 2,
    name: "Camiseta Corinthians 2024",
    category: "camisetas",
    gender: "masculino",
    price: 279.90,
    oldPrice: 319.90,
    emoji: "⚫",
    image: "img/camiseta2.jpg",
    badge: null,
    description: "Camiseta oficial Corinthians"
  },
  {
    id: 3,
    name: "Camiseta Palmeiras 2024",
    category: "camisetas",
    gender: "masculino",
    price: 289.90,
    oldPrice: null,
    emoji: "🟢",
    image: "img/camiseta3.jpg",
    badge: "Novo",
    description: "Camiseta oficial Palmeiras"
  },
  {
    id: 4,
    name: "Camiseta São Paulo FC",
    category: "camisetas",
    gender: "masculino",
    price: 269.90,
    oldPrice: 299.90,
    emoji: "🔴",
    image: "img/camiseta4.jpg",
    badge: null,
    description: "Camiseta oficial São Paulo"
  },
  {
    id: 5,
    name: "Camiseta Brasil Seleção",
    category: "camisetas",
    gender: "masculino",
    price: 349.90,
    oldPrice: 399.90,
    emoji: "🇧🇷",
    image: "img/camiseta5.jpg",
    badge: "Mais vendido",
    description: "Camiseta oficial da Seleção Brasileira"
  },
  // ===== MASCULINO - CHUTEIRAS =====
  {
    id: 6,
    name: "Chuteira Nike Mercurial",
    category: "chuteiras",
    gender: "masculino",
    price: 599.90,
    oldPrice: 749.90,
    emoji: "👟",
    image: "img/chuteira1.jpg",
    badge: "Promoção",
    description: "Chuteira Nike Mercurial Vapor"
  },
  {
    id: 7,
    name: "Chuteira Adidas Predator",
    category: "chuteiras",
    gender: "masculino",
    price: 649.90,
    oldPrice: null,
    emoji: "👟",
    image: "img/chuteira2.jpg",
    badge: null,
    description: "Chuteira Adidas Predator Elite"
  },
  {
    id: 8,
    name: "Chuteira Puma Future",
    category: "chuteiras",
    gender: "masculino",
    price: 479.90,
    oldPrice: 549.90,
    emoji: "👟",
    image: "img/chuteira3.jpg",
    badge: null,
    description: "Chuteira Puma Future Ultimate"
  },
  // ===== MASCULINO - MEIÕES =====
  {
    id: 9,
    name: "Meião Adidas Cano Alto",
    category: "meioes",
    gender: "masculino",
    price: 59.90,
    oldPrice: 79.90,
    emoji: "🧦",
    image: "img/meiao1.jpg",
    badge: null,
    description: "Par de meiões Adidas cano alto"
  },
  {
    id: 10,
    name: "Meião Nike Squad",
    category: "meioes",
    gender: "masculino",
    price: 49.90,
    oldPrice: null,
    emoji: "🧦",
    image: "img/meiao2.jpg",
    badge: null,
    description: "Par de meiões Nike Squad"
  },
  // ===== MASCULINO - OUTROS =====
  {
    id: 11,
    name: "Bola Oficial Nike Flight",
    category: "bolas",
    gender: "masculino",
    price: 189.90,
    oldPrice: 229.90,
    emoji: "⚽",
    image: "img/bola1.jpg",
    badge: "Mais vendido",
    description: "Bola oficial de campo Nike Flight"
  },
  {
    id: 12,
    name: "Luvas de Goleiro Adidas",
    category: "luvas",
    gender: "masculino",
    price: 219.90,
    oldPrice: null,
    emoji: "🧤",
    image: "img/luvas1.jpg",
    badge: null,
    description: "Luvas Adidas Predator para goleiros"
  },
  // ===== FEMININO - CAMISETAS =====
  {
    id: 13,
    name: "Camiseta Feminina Flamengo",
    category: "camisetas",
    gender: "feminino",
    price: 259.90,
    oldPrice: 299.90,
    emoji: "🔴",
    image: "img/camiseta-fem1.jpg",
    badge: "Mais vendido",
    description: "Camiseta oficial feminina Flamengo"
  },
  {
    id: 14,
    name: "Camiseta Feminina Corinthians",
    category: "camisetas",
    gender: "feminino",
    price: 249.90,
    oldPrice: null,
    emoji: "⚫",
    image: "img/camiseta-fem2.jpg",
    badge: null,
    description: "Camiseta oficial feminina Corinthians"
  },
  {
    id: 15,
    name: "Camiseta Feminina Brasil",
    category: "camisetas",
    gender: "feminino",
    price: 329.90,
    oldPrice: 379.90,
    emoji: "🇧🇷",
    image: "img/camiseta-fem3.jpg",
    badge: "Novo",
    description: "Camiseta oficial feminina Seleção"
  },
  {
    id: 16,
    name: "Camiseta Feminina Palmeiras",
    category: "camisetas",
    gender: "feminino",
    price: 269.90,
    oldPrice: null,
    emoji: "🟢",
    image: "img/camiseta-fem4.jpg",
    badge: null,
    description: "Camiseta oficial feminina Palmeiras"
  },
  // ===== FEMININO - CHUTEIRAS =====
  {
    id: 17,
    name: "Chuteira Feminina Nike Phantom",
    category: "chuteiras",
    gender: "feminino",
    price: 549.90,
    oldPrice: 649.90,
    emoji: "👟",
    image: "img/chuteira-fem1.jpg",
    badge: "Promoção",
    description: "Chuteira Nike Phantom GT2 feminina"
  },
  {
    id: 18,
    name: "Chuteira Feminina Adidas X",
    category: "chuteira-fem2",
    gender: "feminino",
    price: 529.90,
    oldPrice: null,
    emoji: "👟",
    image: "img/chuteira2.jpg",
    badge: null,
    description: "Chuteira Adidas X Speedportal feminina"
  },
  // ===== FEMININO - MEIÕES =====
  {
    id: 19,
    name: "Meião Feminino Nike",
    category: "meioes",
    gender: "feminino",
    price: 45.90,
    oldPrice: 59.90,
    emoji: "🧦",
    image: "img/meiao-fem1.jpg",
    badge: null,
    description: "Par de meiões Nike feminino"
  },
  {
    id: 20,
    name: "Meião Feminino Adidas",
    category: "meioes",
    gender: "feminino",
    price: 52.90,
    oldPrice: null,
    emoji: "🧦",
    image: "img/meiao-fem2.jpg",
    badge: null,
    description: "Par de meiões Adidas feminino"
  },
  // ===== FEMININO - OUTROS =====
  {
    id: 21,
    name: "Shorts Feminino Treino",
    category: "shorts",
    gender: "feminino",
    price: 89.90,
    oldPrice: 109.90,
    emoji: "🩳",
    image: "img/short-fem1.jpg",
    badge: null,
    description: "Shorts de treino feminino"
  },
  {
    id: 22,
    name: "Top Esportivo Feminino",
    category: "tops",
    gender: "feminino",
    price: 79.90,
    oldPrice: null,
    emoji: "👚",
    image: "img/top-fem1.jpg",
    badge: "Novo",
    description: "Top esportivo de compressão"
  }
];

// Categorias para filtros
const categories = {
  masculino: [
    { id: "todos", label: "Todos" },
    { id: "camisetas", label: "Camisetas" },
    { id: "chuteiras", label: "Chuteiras" },
    { id: "meioes", label: "Meiões" },
    { id: "bolas", label: "Bolas" },
    { id: "luvas", label: "Luvas" }
  ],
  feminino: [
    { id: "todos", label: "Todos" },
    { id: "camisetas", label: "Camisetas" },
    { id: "chuteiras", label: "Chuteiras" },
    { id: "meioes", label: "Meiões" },
    { id: "shorts", label: "Shorts" },
    { id: "tops", label: "Tops" }
  ]
};

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

function filterProducts({ gender, category, search }) {
  return products.filter(p => {
    if (gender && p.gender !== gender) return false;
    if (category && category !== "todos" && p.category !== category) return false;
    if (search) {
      const q = search.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return true;
  });
}
