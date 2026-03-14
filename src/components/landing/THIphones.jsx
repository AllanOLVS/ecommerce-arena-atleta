import React from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import fotoTHIphones from "@/assets/foto-th-iphones.jpeg";
import logoTH from "@/assets/logo-th-sfundo.png";

export default function THIphones() {
    return (
        <section className="relative bg-slate-900 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                {/* Section Title — Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
                        TH | <span className="text-lime-400">Iphones</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
                        Seu aparelho Apple de qualidade é aqui com a gente!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Column — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative group"
                    >
                        {/* Neon glow behind image */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-lime-500/30 via-lime-400/10 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative overflow-hidden rounded-2xl border border-lime-500/20">
                            <img
                                src={fotoTHIphones}
                                alt="TH | Iphones — Loja física especializada em produtos Apple"
                                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating TH | Iphones Logo Card — landscape, overlapping bottom-right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                            className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 lg:-bottom-8 lg:-right-6 z-10"
                        >
                            <div className="flex items-center justify-center w-36 sm:w-44 lg:w-52 h-14 sm:h-16 lg:h-20 bg-slate-800/85 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:border-lime-500/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(132,204,22,0.1)]">
                                <img
                                    src={logoTH}
                                    alt="TH | Iphones Logo"
                                    className="w-auto h-12 sm:h-16 lg:h-20 object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column — Text & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="flex flex-col justify-center"
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-lime-500" />
                            <span className="text-lime-400 text-xs font-bold uppercase tracking-[0.2em]">
                                Parceiro Oficial
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                            Alta performance também{" "}
                            <span className="text-lime-400">na palma da sua mão.</span>
                        </h2>

                        {/* Body Copy */}
                        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                            Você já domina o jogo com a Arena Atleta. Agora, eleve seu nível na tecnologia.
                            Conheça a <strong className="text-white font-semibold">TH | Iphones</strong>, nossa
                            loja física especializada em produtos Apple. Os melhores iPhones com a segurança e
                            garantia que você já confia.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-8 sm:mt-10">
                            <a
                                href="https://www.instagram.com/thiphones__/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 bg-lime-500 hover:bg-lime-400 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(132,204,22,0.35)]"
                            >
                                <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                                Conheça a TH | iphones
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
