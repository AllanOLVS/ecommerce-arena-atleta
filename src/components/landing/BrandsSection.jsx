import React from "react";
import { motion } from "framer-motion";

import brandNike from "@/assets/brand-nike.png";
import brandAdidas from "@/assets/brand-adidas.png";
import brandPuma from "@/assets/brand-puma.png";
import brandUnderArmour from "@/assets/brand-under-armour.png";
import brandNewBalance from "@/assets/brand-new-balance.png";
import brandMizuno from "@/assets/brand-mizuno.png";

const BRANDS = [
    { name: "Nike", logo: brandNike },
    { name: "Adidas", logo: brandAdidas },
    { name: "Puma", logo: brandPuma },
    { name: "Under Armour", logo: brandUnderArmour },
    { name: "New Balance", logo: brandNewBalance },
    { name: "Mizuno", logo: brandMizuno },
];

export default function BrandsSection() {
    return (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-600 mb-2">
                        Marcas Parceiras
                    </h2>
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                        As Melhores Marcas do Mundo
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {BRANDS.map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group flex items-center justify-center py-8 sm:py-10 px-6 rounded-2xl bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-800 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-16 sm:h-20 w-auto max-w-full object-contain mix-blend-multiply opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:brightness-[10] group-hover:contrast-[0.5] group-hover:mix-blend-normal"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
