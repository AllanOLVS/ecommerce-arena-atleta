import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PromoBanner() {
    return (
        <section className="py-16 sm:py-20 md:py-28 relative overflow-hidden bg-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500/15 via-transparent to-lime-500/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-lime-500/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-lime-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-lime-400/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-6 sm:mb-8">
                        <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        Oferta Especial
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight px-2"
                >
                    Até <span className="text-lime-400">40% OFF</span>
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">em Chuteiras Selecionadas</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-md sm:max-w-2xl mx-auto px-2"
                >
                    Aproveite os melhores preços em chuteiras profissionais. Oferta por tempo limitado!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 sm:mt-10"
                >
                    <Link
                        to="/produtos?categoria=chuteiras"
                        className="group inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_50px_rgba(132,204,22,0.3)]"
                    >
                        Aproveitar Agora
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
