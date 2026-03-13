import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CATEGORIES = [
    {
        name: "Chuteiras",
        href: "/produtos?categoria=chuteiras",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/8791a4172_generated_4f0be57e.png",
    },
    {
        name: "Camisas",
        href: "/produtos?categoria=camisas",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/55e749021_generated_9c7ce199.png",
    },
    {
        name: "Acessórios",
        href: "/produtos?categoria=acessorios",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ac268f937_generated_d98aad6e.png",
    },
    {
        name: "Luvas",
        href: "/produtos?categoria=luvas",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/e64420b3e_generated_7acada1c.png",
    },
];

export default function QuickCategories() {
    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600 mb-3">
                        Navegue por Categoria
                    </h2>
                    <p className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Encontre Seu Diferencial
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
                    {CATEGORIES.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={cat.href}
                                className="group flex flex-col items-center"
                            >
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-slate-100 mb-5 ring-2 ring-transparent group-hover:ring-lime-500 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-wider text-slate-700 group-hover:text-lime-600 transition-colors">
                                    {cat.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}