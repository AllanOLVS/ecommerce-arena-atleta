import React, { useState, useRef, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight, Home, Star, ShoppingCart, Truck, Shield, RefreshCw,
    ZoomIn, Minus, Plus, X, ChevronLeft, Send, MapPin, Ruler
} from "lucide-react";
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";
import ProductCard from "../components/landing/ProductCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { getProductById, getRelatedProducts, ALL_PRODUCTS } from "../data/products";

// Star renderer
function Stars({ rating, size = 16, interactive = false, onRate }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type={interactive ? "button" : undefined}
                    onClick={() => interactive && onRate && onRate(star)}
                    className={interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}
                    disabled={!interactive}
                >
                    <Star
                        style={{ width: size, height: size }}
                        className={`${
                            star <= Math.round(rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-slate-600 text-slate-600"
                        } transition-colors`}
                    />
                </button>
            ))}
        </div>
    );
}

export default function ProductDetail() {
    const { id } = useParams();
    const product = getProductById(id);
    const reviewsRef = useRef(null);

    // Image gallery
    const [selectedImage, setSelectedImage] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

    // Variants
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Shipping
    const [cep, setCep] = useState("");
    const [shippingResult, setShippingResult] = useState(null);

    // Size Guide
    const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

    // Reviews
    const [reviewFormOpen, setReviewFormOpen] = useState(false);
    const [newReviewRating, setNewReviewRating] = useState(0);
    const [newReviewName, setNewReviewName] = useState("");
    const [newReviewComment, setNewReviewComment] = useState("");
    const [allReviews, setAllReviews] = useState(product?.reviews || []);

    const relatedProducts = useMemo(() => getRelatedProducts(Number(id), 4), [id]);

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center pt-20">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white mb-3">Produto não encontrado</h2>
                        <p className="text-slate-400 mb-6">O produto que você procura não existe ou foi removido.</p>
                        <Link to="/produtos" className="px-6 py-3 bg-lime-500 text-slate-900 font-bold rounded-full hover:bg-lime-400 transition-colors">
                            Ver Produtos
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const currentPrice = product.numericPrice;
    const pixPrice = (currentPrice * (1 - product.pixDiscount)).toFixed(2).replace(".", ",");
    const installmentValue = (currentPrice / product.installments).toFixed(2).replace(".", ",");

    const avgRating = allReviews.length > 0
        ? (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1)
        : "0.0";

    const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => {
        const count = allReviews.filter((r) => r.rating === stars).length;
        const pct = allReviews.length > 0 ? Math.round((count / allReviews.length) * 100) : 0;
        return { stars, count, pct };
    });

    const handleZoomMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomPos({ x, y });
    };

    const handleCalculateShipping = () => {
        if (cep.length >= 8) {
            setShippingResult({
                standard: { days: "5-8 dias úteis", price: "R$ 19,90" },
                express: { days: "2-3 dias úteis", price: "R$ 34,90" },
                free: currentPrice >= 299.9,
            });
        }
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (newReviewRating === 0 || !newReviewName.trim() || !newReviewComment.trim()) return;
        const newReview = {
            id: Date.now(),
            user: newReviewName.trim(),
            date: new Date().toISOString().split("T")[0],
            rating: newReviewRating,
            comment: newReviewComment.trim(),
        };
        setAllReviews((prev) => [newReview, ...prev]);
        setNewReviewRating(0);
        setNewReviewName("");
        setNewReviewComment("");
        setReviewFormOpen(false);
    };

    const scrollToReviews = () => {
        reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const categorySlug = Object.entries({
        "Chuteiras": "chuteiras",
        "Camisas": "camisas",
        "Acessórios": "acessorios",
        "Luvas": "luvas",
    })[Object.keys({
        "Chuteiras": "chuteiras",
        "Camisas": "camisas",
        "Acessórios": "acessorios",
        "Luvas": "luvas",
    }).indexOf(product.category)]?.[1] || "";

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* ======== TOP SECTION — BUY BOX ======== */}
            <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-1.5 text-xs sm:text-sm mb-6 sm:mb-8">
                        <Link to="/" className="text-slate-400 hover:text-lime-400 transition-colors flex items-center gap-1">
                            <Home className="w-3.5 h-3.5" />
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="w-3 h-3 text-slate-600" />
                        <Link to="/produtos" className="text-slate-400 hover:text-lime-400 transition-colors">
                            Produtos
                        </Link>
                        <ChevronRight className="w-3 h-3 text-slate-600" />
                        <Link to={`/produtos?categoria=${categorySlug}`} className="text-slate-400 hover:text-lime-400 transition-colors">
                            {product.category}
                        </Link>
                        <ChevronRight className="w-3 h-3 text-slate-600" />
                        <span className="text-lime-400 font-medium truncate max-w-[150px] sm:max-w-none">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                        {/* LEFT — Media */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Main Image */}
                            <div
                                className="relative bg-slate-900/50 rounded-2xl overflow-hidden aspect-square border border-slate-800/60 cursor-crosshair group"
                                onMouseEnter={() => setZoomed(true)}
                                onMouseLeave={() => setZoomed(false)}
                                onMouseMove={handleZoomMove}
                            >
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-300"
                                    style={zoomed ? {
                                        transform: "scale(2)",
                                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                                    } : {}}
                                />
                                {product.badge && (
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-lime-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                                        {product.badge}
                                    </span>
                                )}
                                <div className="absolute bottom-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white/60 pointer-events-none group-hover:text-lime-400 transition-colors">
                                    <ZoomIn className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Thumbnails */}
                            {product.images.length > 1 && (
                                <div className="flex gap-3 mt-4">
                                    {product.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImage(idx)}
                                            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                                                selectedImage === idx
                                                    ? "border-lime-500 ring-2 ring-lime-500/30"
                                                    : "border-slate-700 hover:border-slate-500 opacity-60 hover:opacity-100"
                                            }`}
                                        >
                                            <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* RIGHT — Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col"
                        >
                            {/* Brand */}
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-500 mb-2">{product.brand}</p>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-3">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <button
                                onClick={scrollToReviews}
                                className="flex items-center gap-2 mb-6 group w-fit"
                            >
                                <Stars rating={Number(avgRating)} size={18} />
                                <span className="text-sm text-slate-400 group-hover:text-lime-400 transition-colors">
                                    {avgRating} ({allReviews.length} {allReviews.length === 1 ? "Avaliação" : "Avaliações"})
                                </span>
                            </button>

                            {/* Price */}
                            <div className="bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5 mb-6">
                                <div className="flex items-end gap-3 mb-2">
                                    <span className="text-3xl sm:text-4xl font-black text-white">{product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-slate-500 line-through">{product.originalPrice}</span>
                                    )}
                                    {product.originalPrice && (
                                        <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                                            -{Math.round(((product.numericOriginalPrice - product.numericPrice) / product.numericOriginalPrice) * 100)}%
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-400 mb-2">
                                    ou <span className="text-white font-semibold">{product.installments}x</span> de{" "}
                                    <span className="text-white font-semibold">R$ {installmentValue}</span> sem juros
                                </p>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-full">
                                    <span className="text-xs font-bold text-lime-400">PIX</span>
                                    <span className="text-xs text-lime-300">R$ {pixPrice}</span>
                                    <span className="text-[10px] text-lime-500/70">({Math.round(product.pixDiscount * 100)}% OFF)</span>
                                </div>
                            </div>

                            {/* Colors */}
                            {product.colors.length > 1 && (
                                <div className="mb-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                        Cor: <span className="text-white">{product.colors[selectedColor]?.name}</span>
                                    </p>
                                    <div className="flex gap-2.5">
                                        {product.colors.map((color, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedColor(idx)}
                                                className={`w-9 h-9 rounded-full transition-all duration-200 ${
                                                    selectedColor === idx
                                                        ? "ring-2 ring-lime-500 ring-offset-2 ring-offset-slate-950 scale-110"
                                                        : "hover:scale-105 opacity-70 hover:opacity-100"
                                                }`}
                                                style={{ backgroundColor: color.hex, border: color.hex === "#f5f5f5" ? "2px solid #64748b" : "none" }}
                                                title={color.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Sizes */}
                            <div className="mb-5">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Tamanho{selectedSize ? `: ${selectedSize}` : ""}
                                    </p>
                                    <button
                                        onClick={() => setSizeGuideOpen(true)}
                                        className="flex items-center gap-1 text-xs font-semibold text-lime-400 hover:text-lime-300 transition-colors"
                                    >
                                        <Ruler className="w-3.5 h-3.5" />
                                        Guia de Tamanhos
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`min-w-[44px] h-11 px-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                                                selectedSize === size
                                                    ? "bg-lime-500 text-slate-900 border-lime-500 shadow-lg shadow-lime-500/20"
                                                    : "border-slate-700 text-slate-300 hover:border-lime-500/50 hover:text-white"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Shipping Calculator */}
                            <div className="mb-6">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                    Calcular Frete
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                                        placeholder="Seu CEP"
                                        maxLength={8}
                                        className="flex-1 bg-slate-900/60 border border-slate-700 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/30 placeholder:text-slate-600 transition-all"
                                    />
                                    <button
                                        onClick={handleCalculateShipping}
                                        className="px-5 py-3 bg-slate-800 text-white text-sm font-semibold rounded-xl border border-slate-700 hover:bg-slate-700 hover:border-lime-500/50 transition-all duration-200"
                                    >
                                        Calcular
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {shippingResult && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-3 space-y-2">
                                                {shippingResult.free && (
                                                    <div className="flex items-center justify-between p-3 bg-lime-500/10 border border-lime-500/20 rounded-xl">
                                                        <div className="flex items-center gap-2">
                                                            <Truck className="w-4 h-4 text-lime-400" />
                                                            <span className="text-sm text-lime-300">Frete Grátis</span>
                                                        </div>
                                                        <span className="text-xs text-lime-400">{shippingResult.standard.days}</span>
                                                    </div>
                                                )}
                                                {!shippingResult.free && (
                                                    <div className="flex items-center justify-between p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                                                        <div>
                                                            <p className="text-sm text-white">Padrão</p>
                                                            <p className="text-xs text-slate-400">{shippingResult.standard.days}</p>
                                                        </div>
                                                        <span className="text-sm font-semibold text-white">{shippingResult.standard.price}</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center justify-between p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                                                    <div>
                                                        <p className="text-sm text-white">Expresso</p>
                                                        <p className="text-xs text-slate-400">{shippingResult.express.days}</p>
                                                    </div>
                                                    <span className="text-sm font-semibold text-white">{shippingResult.express.price}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full py-4 sm:py-5 bg-lime-500 hover:bg-lime-400 text-slate-900 text-base sm:text-lg font-black uppercase tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-lime-500/20 hover:shadow-lime-500/30 hover:scale-[1.02] active:scale-[0.98]">
                                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                                Adicionar ao Carrinho
                            </button>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-3 mt-5">
                                {[
                                    { icon: Truck, label: "Frete Grátis", sub: "acima de R$ 299" },
                                    { icon: RefreshCw, label: "1ª Troca Grátis", sub: "sem custo" },
                                    { icon: Shield, label: "Compra Segura", sub: "seus dados protegidos" },
                                ].map(({ icon: Icon, label, sub }) => (
                                    <div key={label} className="flex flex-col items-center text-center p-3 bg-slate-900/40 border border-slate-800/60 rounded-xl">
                                        <Icon className="w-5 h-5 text-lime-400 mb-1.5" />
                                        <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">{label}</p>
                                        <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">{sub}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ======== MIDDLE SECTION — ACCORDION ======== */}
            <section className="pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <Accordion type="single" collapsible defaultValue="description" className="space-y-3">
                            <AccordionItem value="description" className="border-0 bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden px-5">
                                <AccordionTrigger className="text-white font-bold text-base hover:no-underline hover:text-lime-400 py-5">
                                    Descrição
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 text-sm leading-relaxed pb-5">
                                    {product.description}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="specifications" className="border-0 bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden px-5">
                                <AccordionTrigger className="text-white font-bold text-base hover:no-underline hover:text-lime-400 py-5">
                                    Especificações
                                </AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="flex flex-col p-3 bg-slate-800/40 rounded-xl">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </span>
                                                <span className="text-sm text-white">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="shipping" className="border-0 bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden px-5">
                                <AccordionTrigger className="text-white font-bold text-base hover:no-underline hover:text-lime-400 py-5">
                                    Frete & Devoluções
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 text-sm leading-relaxed pb-5 space-y-3">
                                    <p>
                                        <span className="font-semibold text-white">Frete Grátis:</span> Para compras acima de R$ 299,00, o frete é por nossa conta para todo o Brasil.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Prazo de entrega:</span> De 3 a 12 dias úteis, dependendo da região e modalidade escolhida.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Primeira troca grátis:</span> Não serviu? A primeira troca é por nossa conta. Basta solicitar em até 30 dias após o recebimento.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Devoluções:</span> Você pode devolver o produto em até 7 dias corridos após o recebimento, conforme o Código de Defesa do Consumidor.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* ======== BOTTOM SECTION — REVIEWS ======== */}
            <section ref={reviewsRef} className="pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                            Avaliações dos <span className="text-lime-400">Clientes</span>
                        </h2>
                        <button
                            onClick={() => setReviewFormOpen(true)}
                            className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-slate-700 hover:border-lime-500/50 transition-all duration-200 flex items-center gap-2 w-fit"
                        >
                            <Star className="w-4 h-4 text-lime-400" />
                            Avaliar este produto
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Rating Breakdown */}
                        <div className="lg:col-span-1">
                            <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 sticky top-28">
                                <div className="text-center mb-6">
                                    <p className="text-5xl font-black text-white mb-1">{avgRating}</p>
                                    <Stars rating={Number(avgRating)} size={22} />
                                    <p className="text-sm text-slate-400 mt-2">{allReviews.length} avaliações</p>
                                </div>
                                <div className="space-y-2.5">
                                    {ratingBreakdown.map(({ stars, count, pct }) => (
                                        <div key={stars} className="flex items-center gap-2.5">
                                            <span className="text-xs font-semibold text-slate-400 w-3">{stars}</span>
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                            <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                                                <div
                                                    className="h-full bg-lime-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-500 w-8 text-right">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Individual Reviews */}
                        <div className="lg:col-span-2 space-y-4">
                            {allReviews.length === 0 && (
                                <div className="text-center py-12 bg-slate-900/30 border border-slate-800/40 rounded-2xl">
                                    <Star className="w-10 h-10 text-slate-700 mx-auto mb-3" />
                                    <p className="text-slate-400 mb-1">Nenhuma avaliação ainda</p>
                                    <p className="text-sm text-slate-600">Seja o primeiro a avaliar este produto!</p>
                                </div>
                            )}
                            {allReviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-5"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <p className="text-sm font-bold text-white">{review.user}</p>
                                            <p className="text-[11px] text-slate-500">
                                                {new Date(review.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                                            </p>
                                        </div>
                                        <Stars rating={review.rating} size={14} />
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">{review.comment}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ======== CROSS-SELL ======== */}
            <section className="pb-16 sm:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-8">
                        Quem comprou, <span className="text-lime-400">comprou também</span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {relatedProducts.map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} dark />
                        ))}
                    </div>
                </div>
            </section>

            {/* ======== SIZE GUIDE MODAL ======== */}
            <AnimatePresence>
                {sizeGuideOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSizeGuideOpen(false)} />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto z-10"
                        >
                            <button
                                onClick={() => setSizeGuideOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <h3 className="text-xl font-bold text-white mb-1">Guia de Tamanhos</h3>
                            <p className="text-sm text-slate-400 mb-5">{product.sizeType === "shoes" ? "Chuteiras" : product.sizeType === "clothing" ? "Vestuário" : "Geral"}</p>

                            {product.sizeType === "shoes" ? (
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-700">
                                            <th className="text-left text-slate-400 font-semibold py-2 pr-4">BR</th>
                                            <th className="text-left text-slate-400 font-semibold py-2 pr-4">US</th>
                                            <th className="text-left text-slate-400 font-semibold py-2 pr-4">EUR</th>
                                            <th className="text-left text-slate-400 font-semibold py-2">CM</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-200">
                                        {[
                                            ["38", "6.5", "39", "24.5"],
                                            ["39", "7.5", "40", "25.0"],
                                            ["40", "8.0", "41", "25.5"],
                                            ["41", "9.0", "42", "26.5"],
                                            ["42", "9.5", "43", "27.0"],
                                            ["43", "10.5", "44", "27.5"],
                                            ["44", "11.0", "45", "28.5"],
                                        ].map(([br, us, eu, cm]) => (
                                            <tr key={br} className="border-b border-slate-800/50">
                                                <td className="py-2 pr-4 font-medium">{br}</td>
                                                <td className="py-2 pr-4">{us}</td>
                                                <td className="py-2 pr-4">{eu}</td>
                                                <td className="py-2">{cm}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-700">
                                            <th className="text-left text-slate-400 font-semibold py-2 pr-4">Tamanho</th>
                                            <th className="text-left text-slate-400 font-semibold py-2 pr-4">Tórax (cm)</th>
                                            <th className="text-left text-slate-400 font-semibold py-2">Comprimento (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-200">
                                        {[
                                            ["P", "88-96", "68"],
                                            ["M", "96-104", "71"],
                                            ["G", "104-112", "74"],
                                            ["GG", "112-120", "77"],
                                            ["XGG", "120-128", "80"],
                                        ].map(([size, chest, length]) => (
                                            <tr key={size} className="border-b border-slate-800/50">
                                                <td className="py-2 pr-4 font-medium">{size}</td>
                                                <td className="py-2 pr-4">{chest}</td>
                                                <td className="py-2">{length}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ======== REVIEW FORM MODAL ======== */}
            <AnimatePresence>
                {reviewFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setReviewFormOpen(false)} />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-md w-full z-10"
                        >
                            <button
                                onClick={() => setReviewFormOpen(false)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <h3 className="text-xl font-bold text-white mb-1">Avaliar este produto</h3>
                            <p className="text-sm text-slate-400 mb-5">{product.name}</p>

                            <form onSubmit={handleSubmitReview} className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Sua nota</label>
                                    <Stars rating={newReviewRating} size={28} interactive onRate={setNewReviewRating} />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Seu nome</label>
                                    <input
                                        type="text"
                                        value={newReviewName}
                                        onChange={(e) => setNewReviewName(e.target.value)}
                                        placeholder="Digite seu nome"
                                        className="w-full bg-slate-800 border border-slate-700 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/30 placeholder:text-slate-600 transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">Seu comentário</label>
                                    <textarea
                                        value={newReviewComment}
                                        onChange={(e) => setNewReviewComment(e.target.value)}
                                        placeholder="Conte sua experiência com o produto..."
                                        rows={4}
                                        className="w-full bg-slate-800 border border-slate-700 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/30 placeholder:text-slate-600 transition-all resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={newReviewRating === 0}
                                    className="w-full py-3.5 bg-lime-500 hover:bg-lime-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Enviar Avaliação
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
