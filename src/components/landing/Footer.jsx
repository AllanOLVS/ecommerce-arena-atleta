import React from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoArenaAtleta from "@/assets/logo-arena-atleta.png";

const SOCIAL = [
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Facebook, label: "Facebook" },
    { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-5">
                            <img
                                src={logoArenaAtleta}
                                alt="Arena Atleta"
                                className="h-12 sm:h-14 w-auto object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Equipamentos esportivos de alta performance para atletas que superam seus limites.
                            Nascido da paixão, feito para campeões.
                        </p>
                        <div className="flex gap-2 mt-6">
                            {SOCIAL.map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-lime-500 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all duration-300"
                                >
                                    <s.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {[
                                { label: "Chuteiras", to: "/produtos?categoria=chuteiras" },
                                { label: "Camisas", to: "/produtos?categoria=camisas" },
                                { label: "Acessórios", to: "/produtos?categoria=acessorios" },
                                { label: "Lançamentos", to: "/produtos" },
                                { label: "Promoções", to: "/produtos" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm hover:text-lime-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5">
                            Suporte
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {[
                                "Central de Ajuda",
                                "Trocas e Devoluções",
                                "Informações de Envio",
                                "Guia de Tamanhos",
                                "Fale Conosco",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm hover:text-lime-400 transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-white text-xs font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5">
                            Fique Por Dentro
                        </h3>
                        <p className="text-sm mb-4">
                            Receba lançamentos exclusivos e 10% de desconto na primeira compra.
                        </p>
                        <div className="flex max-w-sm">
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="flex-1 min-w-0 bg-slate-800 text-white text-sm px-4 py-3 rounded-l-full outline-none placeholder:text-slate-500 focus:ring-1 focus:ring-lime-500"
                            />
                            <button className="shrink-0 bg-lime-500 hover:bg-lime-400 text-slate-900 px-4 sm:px-5 py-3 rounded-r-full font-bold text-sm transition-colors">
                                Assinar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
                    <p>© 2026 Arena Atleta. Todos os direitos reservados.</p>
                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:text-lime-400 transition-colors">
                            Política de Privacidade
                        </a>
                        <a href="#" className="hover:text-lime-400 transition-colors">
                            Termos de Uso
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}