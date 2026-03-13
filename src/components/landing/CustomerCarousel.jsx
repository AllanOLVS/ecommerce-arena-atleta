import React from "react";
import { motion } from "framer-motion";

const CUSTOMER_PHOTOS = [
    {
        id: 1,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/0e43a8b6b_generated_8654a8e9.png",
        name: "Lucas M.",
    },
    {
        id: 2,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b97c941d1_generated_59c8d386.png",
        name: "Mariana S.",
    },
    {
        id: 3,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/ab8c82560_generated_ff8ff2bd.png",
        name: "Rafael C.",
    },
    {
        id: 4,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/d1c125ae7_generated_6ac0c0a1.png",
        name: "Fernanda O.",
    },
    {
        id: 5,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/632fdc86d_generated_b2842663.png",
        name: "Pedro A.",
    },
    {
        id: 6,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/c4b48fdb2_generated_36ad3ab6.png",
        name: "Juliana S.",
    },
    {
        id: 7,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/3edd783b3_generated_0838d02b.png",
        name: "Thiago R.",
    },
    {
        id: 8,
        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b440d16869b7cd0924cf33/b60b08489_generated_c972ce5f.png",
        name: "Camila B.",
    },
];

// Duplicate for seamless infinite scrolling
const PHOTOS_DOUBLED = [...CUSTOMER_PHOTOS, ...CUSTOMER_PHOTOS];

export default function CustomerCarousel() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400 mb-2">
                        #ArenaAtleta
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                        Destaques
                    </p>
                </motion.div>
            </div>

            {/* Infinite Carousel */}
            <div className="relative">
                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

                <div className="flex animate-infinite-scroll gap-3 sm:gap-4">
                    {PHOTOS_DOUBLED.map((photo, i) => (
                        <div
                            key={`${photo.id}-${i}`}
                            className="shrink-0 w-40 sm:w-56 md:w-64 lg:w-72 group"
                        >
                            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-800">
                                <img
                                    src={photo.src}
                                    alt={`Cliente ${photo.name}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white text-xs sm:text-sm font-semibold">
                                        📸 {photo.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
