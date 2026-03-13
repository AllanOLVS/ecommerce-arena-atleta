import React, { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group"
        >
            <div className="relative bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden aspect-square mb-3 sm:mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-lime-500 text-slate-900 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {product.badge}
                    </span>
                )}

                {/* Wishlist */}
                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                    <Heart
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-slate-600"}`}
                    />
                </button>

                {/* Quick Add */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-lime-500 hover:text-slate-900 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300">
                        <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Adicionar ao Carrinho</span>
                        <span className="sm:hidden">Comprar</span>
                    </button>
                </div>
            </div>

            {/* Info */}
            <div className="px-0.5 sm:px-1">
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5 sm:mb-1">
                    {product.category}
                </p>
                <h3 className="font-semibold text-slate-900 text-xs sm:text-sm leading-snug mb-1.5 sm:mb-2 group-hover:text-lime-600 transition-colors line-clamp-2">
                    {product.name}
                </h3>
                <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                        {product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xs sm:text-sm text-slate-400 line-through">
                            {product.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}