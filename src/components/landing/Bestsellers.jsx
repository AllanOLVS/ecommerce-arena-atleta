import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const PRODUCTS = [
    {
        id: 1,
        name: "Phantom Elite FG Pro",
        category: "Chuteiras",
        price: "R$ 599,90",
        originalPrice: "R$ 749,90",
        badge: "Mais Vendido",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
    },
    {
        id: 2,
        name: "Predator Gold TF",
        category: "Chuteiras",
        price: "R$ 449,90",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
    },
    {
        id: 3,
        name: "Camisa Striker Pro Match",
        category: "Camisas",
        price: "R$ 299,90",
        badge: "Novo",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
    },
    {
        id: 4,
        name: "Camisa Clássica Home 2026",
        category: "Camisas",
        price: "R$ 249,90",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
    },
    {
        id: 5,
        name: "Mochila Elite Sports",
        category: "Acessórios",
        price: "R$ 189,90",
        originalPrice: "R$ 229,90",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
    },
    {
        id: 6,
        name: "Luvas Titan GK Pro",
        category: "Luvas",
        price: "R$ 349,90",
        badge: "Em Alta",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
    },
    {
        id: 7,
        name: "Caneleira Carbon Shield",
        category: "Acessórios",
        price: "R$ 129,90",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
    },
    {
        id: 8,
        name: "Futsal Pro Indoor",
        category: "Chuteiras",
        price: "R$ 379,90",
        originalPrice: "R$ 449,90",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
    },
];

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
                    {PRODUCTS.map((product, i) => (
                        <ProductCard key={product.id} product={product} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}