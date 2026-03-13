import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Lucas Mendes",
        role: "Jogador Amador",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
        rating: 5,
        text: "As chuteiras Phantom Elite são incríveis! Conforto perfeito e aderência absurda no campo. Melhor compra que já fiz para o futebol.",
    },
    {
        id: 2,
        name: "Mariana Silva",
        role: "Atleta de Futsal",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
        rating: 5,
        text: "Entrega super rápida e os produtos são exatamente como nas fotos. A qualidade da camisa Striker Pro é excepcional!",
    },
    {
        id: 3,
        name: "Rafael Costa",
        role: "Goleiro",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
        rating: 5,
        text: "As luvas Titan GK Pro são sensacionais! A empunhadura é perfeita e o material é muito durável. Recomendo a todos os goleiros.",
    },
    {
        id: 4,
        name: "Fernanda Oliveira",
        role: "Treinadora",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
        rating: 4,
        text: "Comprei equipamentos para todo o time na Arena Atleta. Ótimo custo-benefício e o atendimento ao cliente é excepcional.",
    },
    {
        id: 5,
        name: "Pedro Almeida",
        role: "Jogador de Society",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
        rating: 5,
        text: "A mochila Elite Sports é perfeita para levar tudo pro treino. Muitos compartimentos e material resistente. Muito satisfeito!",
    },
    {
        id: 6,
        name: "Juliana Santos",
        role: "Corredora",
        avatar: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
        rating: 5,
        text: "Fiz minha primeira compra e já virei cliente fiel. A troca grátis me deu segurança e o produto chegou antes do prazo!",
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${
                        i < rating
                            ? "fill-lime-400 text-lime-400"
                            : "fill-slate-700 text-slate-700"
                    }`}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400 mb-2"
                    >
                        O Que Dizem Nossos Clientes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white"
                    >
                        Avaliações Reais
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-lime-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(132,204,22,0.05)]"
                        >
                            {/* Quote icon */}
                            <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-700/50 group-hover:text-lime-500/20 transition-colors duration-500" />

                            {/* Stars */}
                            <StarRating rating={t.rating} />

                            {/* Text */}
                            <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-6">
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                                <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden ring-2 ring-slate-600 group-hover:ring-lime-500/30 transition-all duration-500">
                                    <div className="w-full h-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-slate-900 font-bold text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{t.name}</p>
                                    <p className="text-slate-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
