import React, { useState, useMemo } from "react";
import { Filter, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import ProductCard from "../components/landing/ProductCard";

const ALL_PRODUCTS = [
    {
        id: 1,
        name: "Phantom Elite FG Pro",
        category: "Chuteiras",
        price: "R$ 599,90",
        originalPrice: "R$ 749,90",
        numericPrice: 599.9,
        badge: "Mais Vendido",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
    },
    {
        id: 2,
        name: "Predator Gold TF",
        category: "Chuteiras",
        price: "R$ 449,90",
        numericPrice: 449.9,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
    },
    {
        id: 3,
        name: "Camisa Striker Pro Match",
        category: "Camisas",
        price: "R$ 299,90",
        numericPrice: 299.9,
        badge: "Novo",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
    },
    {
        id: 4,
        name: "Camisa Clássica Home 2026",
        category: "Camisas",
        price: "R$ 249,90",
        numericPrice: 249.9,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
    },
    {
        id: 5,
        name: "Mochila Elite Sports",
        category: "Acessórios",
        price: "R$ 189,90",
        originalPrice: "R$ 229,90",
        numericPrice: 189.9,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
    },
    {
        id: 6,
        name: "Luvas Titan GK Pro",
        category: "Luvas",
        price: "R$ 349,90",
        numericPrice: 349.9,
        badge: "Em Alta",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
    },
    {
        id: 7,
        name: "Caneleira Carbon Shield",
        category: "Acessórios",
        price: "R$ 129,90",
        numericPrice: 129.9,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
    },
    {
        id: 8,
        name: "Futsal Pro Indoor",
        category: "Chuteiras",
        price: "R$ 379,90",
        originalPrice: "R$ 449,90",
        numericPrice: 379.9,
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
    },
];

const CATEGORIES = ["Todas", "Chuteiras", "Camisas", "Acessórios", "Luvas"];
const SORT_OPTIONS = [
    { value: "featured", label: "Destaques" },
    { value: "price-asc", label: "Menor Preço" },
    { value: "price-desc", label: "Maior Preço" },
    { value: "name", label: "Nome A-Z" },
];

const CATEGORY_MAP = {
    chuteiras: "Chuteiras",
    camisas: "Camisas",
    acessorios: "Acessórios",
    luvas: "Luvas",
};

export default function Products() {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get("categoria");
    const initialCategory = categoryParam ? (CATEGORY_MAP[categoryParam] || "Todas") : "Todas";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("featured");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        let products = [...ALL_PRODUCTS];

        if (selectedCategory !== "Todas") {
            products = products.filter((p) => p.category === selectedCategory);
        }

        switch (sortBy) {
            case "price-asc":
                products.sort((a, b) => a.numericPrice - b.numericPrice);
                break;
            case "price-desc":
                products.sort((a, b) => b.numericPrice - a.numericPrice);
                break;
            case "name":
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return products;
    }, [selectedCategory, sortBy]);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Banner — padded for fixed header */}
            <section className="bg-slate-900 relative overflow-hidden pt-20 sm:pt-24">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            Nossos <span className="text-lime-400">Produtos</span>
                        </h1>
                        <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-xl">
                            Explore nossa coleção completa de equipamentos esportivos de alta performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 sm:py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Toolbar */}
                    <div className="flex flex-col gap-4 mb-8 sm:mb-10">
                        {/* Row 1: Category Tabs (Desktop) + Mobile filter button */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            {/* Category Tabs - Desktop */}
                            <div className="hidden md:flex items-center gap-2 flex-wrap">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                                            selectedCategory === cat
                                                ? "bg-slate-900 text-lime-400 shadow-lg"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Filter Toggle */}
                            <button
                                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-100 rounded-full text-sm font-semibold text-slate-700"
                            >
                                <SlidersHorizontal className="w-4 h-4" />
                                Filtros
                                {selectedCategory !== "Todas" && (
                                    <span className="ml-1 w-5 h-5 bg-lime-500 text-slate-900 text-xs font-bold rounded-full flex items-center justify-center">
                                        1
                                    </span>
                                )}
                            </button>

                            {/* Sort */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500 hidden sm:inline">Ordenar:</span>
                                <div className="relative">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2.5 pr-10 rounded-full outline-none focus:ring-2 focus:ring-lime-500 cursor-pointer"
                                    >
                                        {SORT_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filters */}
                    <AnimatePresence>
                        {mobileFiltersOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden mb-6"
                            >
                                <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-2xl">
                                    {CATEGORIES.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => {
                                                setSelectedCategory(cat);
                                                setMobileFiltersOpen(false);
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                                selectedCategory === cat
                                                    ? "bg-slate-900 text-lime-400"
                                                    : "bg-white text-slate-600 border border-slate-200"
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Active Filter Tag */}
                    {selectedCategory !== "Todas" && (
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <span className="text-sm text-slate-500">Filtrando por:</span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-lime-400 text-xs font-semibold uppercase tracking-wider rounded-full">
                                {selectedCategory}
                                <button
                                    onClick={() => setSelectedCategory("Todas")}
                                    className="hover:text-white transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        </div>
                    )}

                    {/* Results count */}
                    <p className="text-sm text-slate-500 mb-4 sm:mb-6">
                        {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                    </p>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {filteredProducts.map((product, i) => (
                            <ProductCard key={product.id} product={product} index={i} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16 sm:py-20">
                            <Filter className="w-10 sm:w-12 h-10 sm:h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-base sm:text-lg font-bold text-slate-700 mb-2">
                                Nenhum produto encontrado
                            </h3>
                            <p className="text-slate-500 text-sm">
                                Tente selecionar outra categoria.
                            </p>
                            <button
                                onClick={() => setSelectedCategory("Todas")}
                                className="mt-4 px-6 py-2.5 bg-lime-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full hover:bg-lime-400 transition-colors"
                            >
                                Ver Todos
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
