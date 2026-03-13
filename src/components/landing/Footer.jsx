import React from "react";
import { Instagram, Twitter, Facebook, Youtube, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import logoArenaAtleta from "@/assets/logo-arena-atleta.png";

const SOCIAL = [
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Facebook, label: "Facebook" },
    { icon: Youtube, label: "YouTube" },
];

/* ── Inline SVG Payment Icons ── */
const PixIcon = () => (
    <svg viewBox="0 0 512 512" className="w-8 h-8" fill="currentColor">
        <path d="M395.5 267.4l-74.3-74.3c-9.5-9.5-22.1-14.7-35.5-14.7s-26 5.2-35.5 14.7l-74.3 74.3c-9.5 9.5-14.7 22.1-14.7 35.5s5.2 26 14.7 35.5l74.3 74.3c9.5 9.5 22.1 14.7 35.5 14.7s26-5.2 35.5-14.7l74.3-74.3c9.5-9.5 14.7-22.1 14.7-35.5s-5.2-26-14.7-35.5zM285.7 376.7c-3.1 3.1-7.2 4.8-11.6 4.8s-8.5-1.7-11.6-4.8l-74.3-74.3c-3.1-3.1-4.8-7.2-4.8-11.6s1.7-8.5 4.8-11.6l74.3-74.3c3.1-3.1 7.2-4.8 11.6-4.8s8.5 1.7 11.6 4.8l74.3 74.3c3.1 3.1 4.8 7.2 4.8 11.6s-1.7 8.5-4.8 11.6l-74.3 74.3z" />
        <path d="M440.6 169.4L342.2 71c-23.7-23.7-55.2-36.8-88.7-36.8s-65 13.1-88.7 36.8L66.4 169.4c-23.7 23.7-36.8 55.2-36.8 88.7s13.1 65 36.8 88.7l98.4 98.4c23.7 23.7 55.2 36.8 88.7 36.8s65-13.1 88.7-36.8l98.4-98.4c23.7-23.7 36.8-55.2 36.8-88.7s-13.1-65-36.8-88.7zM411 317.2l-98.4 98.4c-14.9 14.9-34.8 23.1-55.9 23.1s-41-8.2-55.9-23.1L102.4 317.2c-14.9-14.9-23.1-34.8-23.1-55.9s8.2-41 23.1-55.9l98.4-98.4c14.9-14.9 34.8-23.1 55.9-23.1s41 8.2 55.9 23.1l98.4 98.4c14.9 14.9 23.1 34.8 23.1 55.9s-8.2 41-23.1 55.9z" />
    </svg>
);

const VisaIcon = () => (
    <svg viewBox="0 0 48 48" className="w-8 h-5" fill="currentColor">
        <path d="M19.6 33.2l2.8-16.6h4.5l-2.8 16.6h-4.5zm19.2-16.2c-.9-.3-2.3-.7-4-.7-4.4 0-7.5 2.2-7.5 5.4 0 2.4 2.2 3.7 3.9 4.5 1.7.8 2.3 1.3 2.3 2 0 1.1-1.4 1.6-2.6 1.6-1.8 0-2.7-.2-4.1-.8l-.6-.3-.6 3.7c1 .4 2.9.8 4.9.8 4.7 0 7.7-2.2 7.8-5.6.1-1.9-1.2-3.3-3.7-4.5-1.5-.8-2.5-1.3-2.5-2 0-.7.8-1.4 2.5-1.4 1.4 0 2.5.3 3.3.6l.4.2.5-3.5zm5.7-.4h-3.4c-1.1 0-1.9.3-2.3 1.3l-6.6 15.3h4.7l.9-2.5h5.7l.5 2.5H48l-3.5-16.6zm-5.3 10.7l2.4-6.2 1.3 6.2h-3.7zM18 16.6l-4.4 11.3-.5-2.3C12 22.3 8.9 18.8 5.5 17l3.9 16.3h4.7L22.7 16.6H18z" />
    </svg>
);

const MastercardIcon = () => (
    <svg viewBox="0 0 48 48" className="w-8 h-5">
        <circle cx="19" cy="24" r="10" fill="#EB001B" opacity="0.9" />
        <circle cx="29" cy="24" r="10" fill="#F79E1B" opacity="0.9" />
        <path d="M24 16.8c2.4 1.8 4 4.6 4 7.8s-1.6 6-4 7.8c-2.4-1.8-4-4.6-4-7.8s1.6-6 4-7.8z" fill="#FF5F00" />
    </svg>
);

const BoletoIcon = () => (
    <svg viewBox="0 0 48 48" className="w-8 h-5" fill="currentColor">
        <rect x="4" y="10" width="2" height="28" />
        <rect x="8" y="10" width="4" height="28" />
        <rect x="14" y="10" width="2" height="28" />
        <rect x="18" y="10" width="4" height="28" />
        <rect x="24" y="10" width="2" height="28" />
        <rect x="28" y="10" width="2" height="28" />
        <rect x="32" y="10" width="4" height="28" />
        <rect x="38" y="10" width="2" height="28" />
        <rect x="42" y="10" width="4" height="28" />
    </svg>
);

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

            {/* Payment & Security Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {/* Payment Methods */}
                        <div className="flex flex-col items-center sm:items-start gap-2">
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                                Formas de Pagamento
                            </span>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-8 rounded bg-slate-800 text-lime-400" title="Pix">
                                    <PixIcon />
                                </div>
                                <div className="flex items-center justify-center w-12 h-8 rounded bg-slate-800 text-slate-300" title="Visa">
                                    <VisaIcon />
                                </div>
                                <div className="flex items-center justify-center w-12 h-8 rounded bg-slate-800" title="Mastercard">
                                    <MastercardIcon />
                                </div>
                                <div className="flex items-center justify-center w-12 h-8 rounded bg-slate-800 text-slate-300" title="Boleto">
                                    <BoletoIcon />
                                </div>
                            </div>
                        </div>

                        {/* Security Badges */}
                        <div className="flex flex-col items-center sm:items-end gap-2">
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                                Segurança
                            </span>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 text-lime-400">
                                    <Lock className="w-3.5 h-3.5" />
                                    <span className="text-[11px] font-bold uppercase tracking-wide">SSL</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 text-lime-400">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span className="text-[11px] font-bold uppercase tracking-wide">Site Seguro</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar — Rights + Legal */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-4 text-xs text-center">
                    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
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
                    <p className="text-[10px] text-slate-600 leading-relaxed max-w-2xl">
                        Arena Atleta Comércio de Artigos Esportivos LTDA — CNPJ: 00.000.000/0001-00
                        <br />
                        Rua Exemplo, 123 — Centro, São Paulo/SP — CEP 01001-000
                    </p>
                </div>
            </div>
        </footer>
    );
}