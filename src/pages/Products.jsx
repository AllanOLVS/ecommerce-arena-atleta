import React, { useState, useMemo, useCallback } from "react";
import { Filter, X, SlidersHorizontal, ChevronDown, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import ProductCard from "../components/landing/ProductCard";
import { ALL_PRODUCTS, CATEGORIES, CATEGORY_MAP, SORT_OPTIONS, BRANDS } from "../data/products";

// Size options
const SHOE_SIZES = ["36", "37", "38", "39", "40", "41", "42", "43", "44"];
const CLOTHING_SIZES = ["P", "M", "G", "GG", "XGG"];

export default function Products() {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get("categoria");
    const initialCategory = categoryParam ? (CATEGORY_MAP[categoryParam] || "Todas") : "Todas";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("featured");
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Advanced filters
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 800]);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleBrand = useCallback((brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    }, []);

    const toggleSize = useCallback((size) => {
        setSelectedSizes((prev) =>
            prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
        );
    }, []);

    const clearAllFilters = useCallback(() => {
        setSelectedCategory("Todas");
        setSelectedBrands([]);
        setSelectedSizes([]);
        setPriceRange([0, 800]);
    }, []);

    const activeFilterCount = useMemo(() => {
        let count = 0;
        if (selectedCategory !== "Todas") count++;
        if (selectedBrands.length) count++;
        if (selectedSizes.length) count++;
        if (priceRange[0] > 0 || priceRange[1] < 800) count++;
        return count;
    }, [selectedCategory, selectedBrands, selectedSizes, priceRange]);

    // Determine which sizes to show based on selected category
    const availableSizes = useMemo(() => {
        if (selectedCategory === "Chuteiras") return SHOE_SIZES;
        if (selectedCategory === "Camisas") return CLOTHING_SIZES;
        if (selectedCategory === "Luvas") return ["7", "8", "9", "10", "11"];
        // Show both shoe and clothing sizes when no specific category
        return [...new Set([...SHOE_SIZES, ...CLOTHING_SIZES])];
    }, [selectedCategory]);

    const filteredProducts = useMemo(() => {
        let products = [...ALL_PRODUCTS];

        if (selectedCategory !== "Todas") {
            products = products.filter((p) => p.category === selectedCategory);
        }

        if (selectedBrands.length > 0) {
            products = products.filter((p) => selectedBrands.includes(p.brand));
        }

        if (selectedSizes.length > 0) {
            products = products.filter((p) =>
                p.sizes && p.sizes.some((s) => selectedSizes.includes(s))
            );
        }

        products = products.filter(
            (p) => p.numericPrice >= priceRange[0] && p.numericPrice <= priceRange[1]
        );

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
    }, [selectedCategory, sortBy, selectedBrands, selectedSizes, priceRange]);

    const categoryLabel = selectedCategory !== "Todas" ? selectedCategory : null;

    // Sidebar Filter Content (reused on desktop and mobile)
    const FilterContent = ({ onClose }) => (
        <div className="space-y-6">
            {/* Categories */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Categorias</h4>
                <div className="space-y-1.5">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setSelectedCategory(cat); if (onClose) onClose(); }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                selectedCategory === cat
                                    ? "bg-lime-500/10 text-lime-400 border border-lime-500/20"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Marcas</h4>
                <div className="space-y-2">
                    {BRANDS.map((brand) => (
                        <label
                            key={brand}
                            className="flex items-center gap-2.5 cursor-pointer group"
                        >
                            <div
                                onClick={() => toggleBrand(brand)}
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                                    selectedBrands.includes(brand)
                                        ? "bg-lime-500 border-lime-500"
                                        : "border-slate-600 group-hover:border-slate-400"
                                }`}
                            >
                                {selectedBrands.includes(brand) && (
                                    <svg className="w-3 h-3 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Tamanhos</h4>
                <div className="flex flex-wrap gap-2">
                    {availableSizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`min-w-[40px] h-9 px-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                                selectedSizes.includes(size)
                                    ? "bg-lime-500 text-slate-900 border-lime-500"
                                    : "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Faixa de Preço</h4>
                <div className="px-1">
                    <input
                        type="range"
                        min={0}
                        max={800}
                        step={10}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-lime-500
                            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-lime-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg
                            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-lime-500 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                    />
                    <div className="flex justify-between mt-2">
                        <span className="text-xs text-slate-400">R$ {priceRange[0]}</span>
                        <span className="text-xs font-semibold text-lime-400">R$ {priceRange[1]}</span>
                    </div>
                </div>
            </div>

            {/* Clear all */}
            {activeFilterCount > 0 && (
                <button
                    onClick={clearAllFilters}
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-200"
                >
                    Limpar Filtros ({activeFilterCount})
                </button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Banner */}
            <section className="bg-slate-900 relative overflow-hidden pt-20 sm:pt-24">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumbs */}
                        <nav className="flex items-center gap-1.5 text-xs sm:text-sm mb-4">
                            <Link to="/" className="text-slate-400 hover:text-lime-400 transition-colors flex items-center gap-1">
                                <Home className="w-3.5 h-3.5" />
                                <span>Home</span>
                            </Link>
                            <ChevronRight className="w-3 h-3 text-slate-600" />
                            <span className={categoryLabel ? "text-slate-400 hover:text-lime-400 transition-colors cursor-pointer" : "text-lime-400 font-medium"}
                                  onClick={() => categoryLabel && setSelectedCategory("Todas")}
                            >
                                Produtos
                            </span>
                            {categoryLabel && (
                                <>
                                    <ChevronRight className="w-3 h-3 text-slate-600" />
                                    <span className="text-lime-400 font-medium">{categoryLabel}</span>
                                </>
                            )}
                        </nav>

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
            <section className="py-8 sm:py-10 md:py-16 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-8">
                        {/* Desktop Sidebar */}
                        <AnimatePresence>
                            {sidebarOpen && (
                                <motion.aside
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 260, opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="hidden lg:block shrink-0 overflow-hidden"
                                >
                                    <div className="w-[260px] bg-slate-900/60 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-5 sticky top-28">
                                        <div className="flex items-center justify-between mb-5">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                                                <SlidersHorizontal className="w-4 h-4 text-lime-400" />
                                                Filtros
                                            </h3>
                                            {activeFilterCount > 0 && (
                                                <span className="w-5 h-5 bg-lime-500 text-slate-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                                                    {activeFilterCount}
                                                </span>
                                            )}
                                        </div>
                                        <FilterContent />
                                    </div>
                                </motion.aside>
                            )}
                        </AnimatePresence>

                        {/* Products Area */}
                        <div className="flex-1 min-w-0">
                            {/* Toolbar */}
                            <div className="flex flex-col gap-4 mb-8 sm:mb-10">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    {/* Toggle Sidebar (Desktop) */}
                                    <button
                                        onClick={() => setSidebarOpen(!sidebarOpen)}
                                        className="hidden lg:flex items-center gap-2 px-4 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-200"
                                    >
                                        <SlidersHorizontal className="w-4 h-4" />
                                        {sidebarOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
                                    </button>

                                    {/* Category Tabs - Desktop (shown when sidebar is hidden) */}
                                    {!sidebarOpen && (
                                        <div className="hidden lg:flex items-center gap-2 flex-wrap">
                                            {CATEGORIES.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => setSelectedCategory(cat)}
                                                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                                                        selectedCategory === cat
                                                            ? "bg-lime-500 text-slate-900 shadow-lg shadow-lime-500/20"
                                                            : "bg-slate-800/60 text-slate-300 hover:bg-slate-700 border border-slate-700/50"
                                                    }`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Mobile Filter Toggle */}
                                    <button
                                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                        className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm font-semibold text-slate-300"
                                    >
                                        <SlidersHorizontal className="w-4 h-4" />
                                        Filtros
                                        {activeFilterCount > 0 && (
                                            <span className="ml-1 w-5 h-5 bg-lime-500 text-slate-900 text-xs font-bold rounded-full flex items-center justify-center">
                                                {activeFilterCount}
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
                                                className="appearance-none bg-slate-800/60 text-slate-200 text-sm font-semibold px-4 py-2.5 pr-10 rounded-full outline-none focus:ring-2 focus:ring-lime-500 cursor-pointer border border-slate-700/50"
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

                            {/* Mobile Filters Drawer */}
                            <AnimatePresence>
                                {mobileFiltersOpen && (
                                    <>
                                        {/* Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        />
                                        {/* Drawer */}
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: 0 }}
                                            exit={{ x: "-100%" }}
                                            transition={{ type: "spring", damping: 25, stiffness: 250 }}
                                            className="lg:hidden fixed top-0 left-0 bottom-0 w-[300px] bg-slate-900 z-50 overflow-y-auto"
                                        >
                                            <div className="p-5">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                        <SlidersHorizontal className="w-5 h-5 text-lime-400" />
                                                        Filtros
                                                    </h3>
                                                    <button
                                                        onClick={() => setMobileFiltersOpen(false)}
                                                        className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <FilterContent onClose={() => setMobileFiltersOpen(false)} />
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>

                            {/* Active Filter Tags */}
                            {activeFilterCount > 0 && (
                                <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
                                    <span className="text-sm text-slate-500">Filtros:</span>
                                    {selectedCategory !== "Todas" && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-lime-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-slate-700/50">
                                            {selectedCategory}
                                            <button onClick={() => setSelectedCategory("Todas")} className="hover:text-white transition-colors">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    )}
                                    {selectedBrands.map((brand) => (
                                        <span key={brand} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-lime-400 text-xs font-semibold tracking-wider rounded-full border border-slate-700/50">
                                            {brand}
                                            <button onClick={() => toggleBrand(brand)} className="hover:text-white transition-colors">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    ))}
                                    {selectedSizes.length > 0 && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-lime-400 text-xs font-semibold tracking-wider rounded-full border border-slate-700/50">
                                            Tam: {selectedSizes.join(", ")}
                                            <button onClick={() => setSelectedSizes([])} className="hover:text-white transition-colors">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    )}
                                    {(priceRange[0] > 0 || priceRange[1] < 800) && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-lime-400 text-xs font-semibold tracking-wider rounded-full border border-slate-700/50">
                                            R$ {priceRange[0]} – R$ {priceRange[1]}
                                            <button onClick={() => setPriceRange([0, 800])} className="hover:text-white transition-colors">
                                                <X className="w-3 h-3" />
                                            </button>
                                        </span>
                                    )}
                                </div>
                            )}

                            {/* Results count */}
                            <p className="text-sm text-slate-500 mb-4 sm:mb-6">
                                {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
                            </p>

                            {/* Products Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                                {filteredProducts.map((product, i) => (
                                    <ProductCard key={product.id} product={product} index={i} dark />
                                ))}
                            </div>

                            {/* Empty State */}
                            {filteredProducts.length === 0 && (
                                <div className="text-center py-16 sm:py-20">
                                    <Filter className="w-10 sm:w-12 h-10 sm:h-12 text-slate-600 mx-auto mb-4" />
                                    <h3 className="text-base sm:text-lg font-bold text-slate-300 mb-2">
                                        Nenhum produto encontrado
                                    </h3>
                                    <p className="text-slate-500 text-sm">
                                        Tente ajustar seus filtros para encontrar o que procura.
                                    </p>
                                    <button
                                        onClick={clearAllFilters}
                                        className="mt-4 px-6 py-2.5 bg-lime-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-full hover:bg-lime-400 transition-colors"
                                    >
                                        Limpar Filtros
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
