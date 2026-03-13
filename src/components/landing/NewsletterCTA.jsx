import React from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterCTA() {
    return (
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-lime-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-lime-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600 mb-3">
                        Newsletter
                    </h2>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                        Receba Ofertas{" "}
                        <span className="text-lime-500">Exclusivas</span>
                    </p>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-500 max-w-sm sm:max-w-lg mx-auto px-2">
                        Cadastre-se e ganhe 10% de desconto na sua primeira compra. Fique por dentro dos lançamentos e promoções.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-8 sm:mt-10"
                >
                    <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto px-2 sm:px-0">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 min-w-0 bg-white text-slate-900 text-sm px-5 sm:px-6 py-3.5 sm:py-4 rounded-full outline-none border-2 border-slate-200 focus:border-lime-500 transition-colors shadow-sm placeholder:text-slate-400"
                        />
                        <button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-lime-500 text-white hover:text-slate-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-lime-500/20">
                            <Send className="w-4 h-4" />
                            Cadastrar
                        </button>
                    </div>
                    <p className="mt-4 text-xs text-slate-400">
                        Sem spam. Cancele quando quiser.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
