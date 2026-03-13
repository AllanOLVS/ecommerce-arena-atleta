import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoArenaAtleta from "@/assets/logo-arena-atleta.png";

const HERO_IMAGE = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/83dd54713_generated_7d0f7d6c.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={HERO_IMAGE}
                    alt="Arena Atleta equipamentos esportivos"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/40" />
            </div>

            {/* Content — Centered */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 sm:py-32 pt-28 sm:pt-40">
                <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <img
                            src={logoArenaAtleta}
                            alt="Arena Atleta"
                            className="h-20 sm:h-28 md:h-36 lg:h-44 w-auto object-contain mb-6 sm:mb-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white uppercase leading-[0.9] tracking-tight"
                    >
                        Domine
                        <br />
                        <span className="text-lime-400">O Jogo</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-xs sm:max-w-lg md:max-w-2xl leading-relaxed px-2"
                    >
                        Equipamentos de alta performance para quem respira esporte. Eleve seu jogo com a Arena Atleta.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                        className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Link
                            to="/produtos"
                            className="group inline-flex items-center justify-center gap-3 bg-lime-500 hover:bg-lime-400 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(132,204,22,0.35)]"
                        >
                            Ver Coleção
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/produtos"
                            className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-lime-400 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/5"
                        >
                            Explorar Ofertas
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}