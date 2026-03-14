import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ALL_PRODUCTS } from "../../data/products";

export default function Bestsellers() {
    return (
        <section className="py-20 sm:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600 mb-2">
                            Em Alta
                        </h2>
                        <p className="text-3xl sm:text-4xl font-bold text-slate-900">
                            Mais Vendidos
                        </p>
                    </div>
                    <Link
                        to="/produtos"
                        className="text-sm font-semibold text-slate-600 hover:text-lime-600 transition-colors uppercase tracking-wider"
                    >
                        Ver Todos →
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {ALL_PRODUCTS.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}