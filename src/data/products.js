// Central product data for Arena Atleta
// Used by PLP (Products.jsx), PDP (ProductDetail.jsx), Bestsellers, and cross-sell

export const BRANDS = ["Nike", "Adidas", "Puma", "Mizuno", "Umbro"];

export const CATEGORIES = ["Todas", "Chuteiras", "Camisas", "Acessórios", "Luvas"];

export const CATEGORY_MAP = {
    chuteiras: "Chuteiras",
    camisas: "Camisas",
    acessorios: "Acessórios",
    luvas: "Luvas",
};

export const SORT_OPTIONS = [
    { value: "featured", label: "Destaques" },
    { value: "price-asc", label: "Menor Preço" },
    { value: "price-desc", label: "Maior Preço" },
    { value: "name", label: "Nome A-Z" },
];

export const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Phantom Elite FG Pro",
        category: "Chuteiras",
        brand: "Nike",
        price: "R$ 599,90",
        originalPrice: "R$ 749,90",
        numericPrice: 599.9,
        numericOriginalPrice: 749.9,
        badge: "Mais Vendido",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
        ],
        colors: [
            { name: "Preto/Verde", hex: "#1a1a1a", accent: "#84cc16" },
            { name: "Branco/Dourado", hex: "#f5f5f5", accent: "#d4a017" },
            { name: "Azul/Prata", hex: "#1e3a5f", accent: "#c0c0c0" },
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        sizeType: "shoes",
        rating: 4.8,
        reviewCount: 42,
        installments: 10,
        pixDiscount: 0.05,
        description: "A chuteira Phantom Elite FG Pro é projetada para jogadores que buscam o máximo de performance em campos de grama natural. Conta com uma upper de Flyknit de alta qualidade que oferece toque excepcional na bola, enquanto o solado com travas cônicas e lâminas proporciona tração superior para mudanças de direção explosivas. O design interno sem língua garante uma área de chute limpa e precisa.",
        specifications: {
            material: "Flyknit Premium + TPU",
            peso: "210g (tamanho 42)",
            terreno: "Campo (FG — Firm Ground)",
            palmilha: "OrthoLite® moldada",
            solado: "Nylon reforçado com travas cônicas e laminares",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Carlos M.", date: "2026-02-15", rating: 5, comment: "Melhor chuteira que já tive! Conforto incrível e tração perfeita no campo. Recomendo demais pra quem joga na grama." },
            { id: 2, user: "Rafael S.", date: "2026-01-28", rating: 5, comment: "Qualidade de sobra. A bola gruda no pé e o solado segura muito bem nas arrancadas." },
            { id: 3, user: "Lucas P.", date: "2026-01-10", rating: 4, comment: "Muito boa, mas achei um pouco apertada no início. Depois de amaciar ficou perfeita." },
            { id: 4, user: "João V.", date: "2025-12-20", rating: 5, comment: "Nota 10! Estilo e desempenho juntos. Os elogios no campo são garantidos." },
        ],
    },
    {
        id: 2,
        name: "Predator Gold TF",
        category: "Chuteiras",
        brand: "Adidas",
        price: "R$ 449,90",
        numericPrice: 449.9,
        badge: null,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
        ],
        colors: [
            { name: "Dourado/Preto", hex: "#d4a017", accent: "#1a1a1a" },
            { name: "Vermelho/Preto", hex: "#cc2222", accent: "#1a1a1a" },
        ],
        sizes: ["39", "40", "41", "42", "43"],
        sizeType: "shoes",
        rating: 4.5,
        reviewCount: 28,
        installments: 10,
        pixDiscount: 0.05,
        description: "A Predator Gold TF é feita para dominar os campos de society. Com textura Demonskin 2.0 na parte superior, oferece grip excepcional para passes precisos e chutes com efeito. O solado de borracha com padrão multidirecional é otimizado para grama sintética.",
        specifications: {
            material: "Sintético texturizado Demonskin 2.0",
            peso: "235g (tamanho 42)",
            terreno: "Society (TF — Turf)",
            palmilha: "EVA moldada",
            solado: "Borracha com travas multidirecionais",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Marcos L.", date: "2026-02-01", rating: 5, comment: "Perfeita para society! A tração na grama sintética é surreal." },
            { id: 2, user: "Pedro H.", date: "2026-01-15", rating: 4, comment: "Muito bonita e confortável. Nota 4 porque queria mais opções de cor." },
        ],
    },
    {
        id: 3,
        name: "Camisa Striker Pro Match",
        category: "Camisas",
        brand: "Puma",
        price: "R$ 299,90",
        numericPrice: 299.9,
        badge: "Novo",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
        ],
        colors: [
            { name: "Preto", hex: "#1a1a1a", accent: "#84cc16" },
            { name: "Branco", hex: "#f5f5f5", accent: "#1a1a1a" },
        ],
        sizes: ["P", "M", "G", "GG", "XGG"],
        sizeType: "clothing",
        rating: 4.7,
        reviewCount: 35,
        installments: 6,
        pixDiscount: 0.05,
        description: "Camisa de jogo oficial com tecnologia dryCELL que mantém o corpo seco e confortável durante toda a partida. Tecido leve, elástico e de alta respirabilidade, com corte slim fit para liberdade total de movimento.",
        specifications: {
            material: "100% Poliéster reciclado dryCELL",
            peso: "145g (tamanho M)",
            terreno: "Multiuso",
            ajuste: "Slim Fit",
            tecnologia: "dryCELL — absorção de umidade",
            origem: "Nacional",
        },
        reviews: [
            { id: 1, user: "Ana C.", date: "2026-03-01", rating: 5, comment: "Tecido incrível, super leve e seca rápido. Amei o caimento!" },
            { id: 2, user: "Felipe R.", date: "2026-02-14", rating: 4, comment: "Boa qualidade, mas o tamanho G ficou um pouco justo em mim." },
        ],
    },
    {
        id: 4,
        name: "Camisa Clássica Home 2026",
        category: "Camisas",
        brand: "Adidas",
        price: "R$ 249,90",
        numericPrice: 249.9,
        badge: null,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
        ],
        colors: [
            { name: "Amarelo/Verde", hex: "#fbbf24", accent: "#16a34a" },
            { name: "Azul/Branco", hex: "#1e40af", accent: "#f5f5f5" },
        ],
        sizes: ["P", "M", "G", "GG"],
        sizeType: "clothing",
        rating: 4.6,
        reviewCount: 19,
        installments: 6,
        pixDiscount: 0.05,
        description: "A camisa clássica Home 2026 traz design retrô com tecnologia moderna. Tecido AEROREADY que absorve a umidade rapidamente, mantendo seu conforto dentro e fora de campo. Escudo bordado e acabamento premium.",
        specifications: {
            material: "100% Poliéster AEROREADY",
            peso: "155g (tamanho M)",
            terreno: "Multiuso",
            ajuste: "Regular Fit",
            tecnologia: "AEROREADY — controle de umidade",
            origem: "Nacional",
        },
        reviews: [
            { id: 1, user: "Bruno G.", date: "2026-02-20", rating: 5, comment: "Clássica e bonita. Ótimo acabamento, vale cada centavo." },
            { id: 2, user: "Diego F.", date: "2026-01-05", rating: 4, comment: "Camisa bonita, mas esperava mais opções de tamanho." },
        ],
    },
    {
        id: 5,
        name: "Mochila Elite Sports",
        category: "Acessórios",
        brand: "Nike",
        price: "R$ 189,90",
        originalPrice: "R$ 229,90",
        numericPrice: 189.9,
        numericOriginalPrice: 229.9,
        badge: null,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
        ],
        colors: [
            { name: "Preto", hex: "#1a1a1a", accent: "#84cc16" },
        ],
        sizes: ["Único"],
        sizeType: "unique",
        rating: 4.4,
        reviewCount: 12,
        installments: 4,
        pixDiscount: 0.05,
        description: "Mochila esportiva de alta capacidade com compartimento para chuteiras separado e bolso lateral para garrafa. Material impermeável e resistente, perfeita para levar todo o seu equipamento ao treino ou jogo.",
        specifications: {
            material: "Poliéster 600D impermeável",
            capacidade: "35 litros",
            compartimentos: "3 principais + bolso para chuteiras",
            alças: "Acolchoadas e ajustáveis",
            dimensões: "50cm x 30cm x 20cm",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Thiago M.", date: "2026-01-20", rating: 5, comment: "Cabe tudo! Chuteira, roupa, toalha. Muito prática." },
        ],
    },
    {
        id: 6,
        name: "Luvas Titan GK Pro",
        category: "Luvas",
        brand: "Puma",
        price: "R$ 349,90",
        numericPrice: 349.9,
        badge: "Em Alta",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
        ],
        colors: [
            { name: "Preto/Lime", hex: "#1a1a1a", accent: "#84cc16" },
            { name: "Branco/Azul", hex: "#f5f5f5", accent: "#2563eb" },
        ],
        sizes: ["7", "8", "9", "10", "11"],
        sizeType: "gloves",
        rating: 4.9,
        reviewCount: 55,
        installments: 6,
        pixDiscount: 0.05,
        description: "Luvas de goleiro profissionais com palma em látex alemão de 4mm para aderência máxima em todas as condições climáticas. Punho com tira de ajuste e sistema de ventilação nos dedos.",
        specifications: {
            material: "Látex alemão 4mm + malha respirável",
            tipo: "Profissional — corte negativo",
            palm: "Grip Control — aderência total",
            punho: "Tira ajustável com velcro",
            proteção: "Espuma EVA nos dedos",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Goleiro Silva", date: "2026-03-05", rating: 5, comment: "A melhor luva nessa faixa de preço. O grip é absurdo, mesmo com chuva." },
            { id: 2, user: "Ricardo G.", date: "2026-02-10", rating: 5, comment: "Confortável e segura muito bem. Recomendo para qualquer goleiro." },
            { id: 3, user: "André K.", date: "2026-01-22", rating: 5, comment: "Já é a terceira vez que compro. Não troco por nenhuma outra." },
        ],
    },
    {
        id: 7,
        name: "Caneleira Carbon Shield",
        category: "Acessórios",
        brand: "Umbro",
        price: "R$ 129,90",
        numericPrice: 129.9,
        badge: null,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
        ],
        colors: [
            { name: "Preto", hex: "#1a1a1a", accent: "#84cc16" },
        ],
        sizes: ["P", "M", "G"],
        sizeType: "clothing",
        rating: 4.3,
        reviewCount: 8,
        installments: 3,
        pixDiscount: 0.05,
        description: "Caneleira leve com casco em fibra de carbono para máxima proteção sem comprometer a mobilidade. Forro interno em EVA que absorve impactos e se adapta ao formato da canela.",
        specifications: {
            material: "Fibra de Carbono + EVA",
            peso: "85g (par, tamanho M)",
            proteção: "Alta — certificação FIFA",
            fixação: "Faixa elástica integrada",
            tamanhos: "P (até 160cm), M (160-175cm), G (175cm+)",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Leandro A.", date: "2026-01-30", rating: 4, comment: "Leve e protege bem. Boa relação custo-benefício." },
        ],
    },
    {
        id: 8,
        name: "Futsal Pro Indoor",
        category: "Chuteiras",
        brand: "Mizuno",
        price: "R$ 379,90",
        originalPrice: "R$ 449,90",
        numericPrice: 379.9,
        numericOriginalPrice: 449.9,
        badge: null,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
        images: [
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
            "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
        ],
        colors: [
            { name: "Preto/Vermelho", hex: "#1a1a1a", accent: "#dc2626" },
            { name: "Branco/Azul", hex: "#f5f5f5", accent: "#2563eb" },
        ],
        sizes: ["38", "39", "40", "41", "42", "43"],
        sizeType: "shoes",
        rating: 4.6,
        reviewCount: 31,
        installments: 10,
        pixDiscount: 0.05,
        description: "Chuteira de futsal com solado de borracha não marcante, ideal para quadras indoor. A entressola em EVA oferece amortecimento responsivo, e o cabedal em microfibra proporciona toque macio na bola com excelente durabilidade.",
        specifications: {
            material: "Microfibra Premium + mesh respirável",
            peso: "225g (tamanho 42)",
            terreno: "Futsal (IN — Indoor)",
            palmilha: "EVA anatômica removível",
            solado: "Borracha não marcante",
            origem: "Importado",
        },
        reviews: [
            { id: 1, user: "Gabriel T.", date: "2026-02-25", rating: 5, comment: "Sensacional para quadra! Leve, confortável e com ótima aderência." },
            { id: 2, user: "Henrique D.", date: "2026-02-05", rating: 4, comment: "Muito boa, só achei que poderia ter mais opções de cor." },
        ],
    },
];

// Helper: find product by ID
export function getProductById(id) {
    return ALL_PRODUCTS.find((p) => p.id === Number(id));
}

// Helper: get related products (same category, excluding current)
export function getRelatedProducts(productId, limit = 4) {
    const product = getProductById(productId);
    if (!product) return ALL_PRODUCTS.slice(0, limit);
    const sameCat = ALL_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id);
    const others = ALL_PRODUCTS.filter((p) => p.category !== product.category && p.id !== product.id);
    return [...sameCat, ...others].slice(0, limit);
}
