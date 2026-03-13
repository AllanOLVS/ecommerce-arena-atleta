import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoArenaAtleta from "@/assets/logo-arena-atleta.png";

const NAV_LINKS = [
    { label: "Chuteiras", href: "/produtos?categoria=chuteiras" },
    { label: "Camisas", href: "/produtos?categoria=camisas" },
    { label: "Acessórios", href: "/produtos?categoria=acessorios" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-slate-700/50"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[88px]">
                    {/* Logo */}
                    <Link to="/" className="flex items-center shrink-0 group">
                        <img
                            src={logoArenaAtleta}
                            alt="Arena Atleta"
                            className="h-10 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="relative px-5 py-2 text-sm font-semibold uppercase tracking-widest text-slate-200 hover:text-lime-400 transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-lime-400 rounded-full transition-all duration-300 group-hover:w-2/3" />
                            </Link>
                        ))}
                    </nav>

                    {/* Search + Actions */}
                    <div className="flex items-center gap-0.5 sm:gap-2">
                        {/* Desktop Search */}
                        <div className="hidden md:flex items-center relative">
                            <div
                                className={`flex items-center rounded-full overflow-hidden transition-all duration-300 border ${
                                    searchOpen
                                        ? "w-64 bg-slate-800/80 backdrop-blur-sm border-lime-500/30"
                                        : "w-10 bg-transparent border-transparent"
                                }`}
                            >
                                <button
                                    onClick={() => setSearchOpen(!searchOpen)}
                                    className="shrink-0 w-10 h-10 flex items-center justify-center text-slate-300 hover:text-lime-400 transition-colors duration-300"
                                >
                                    <Search className="w-[18px] h-[18px]" />
                                </button>
                                {searchOpen && (
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Buscar produtos..."
                                        className="bg-transparent text-white text-sm pr-4 outline-none w-full placeholder:text-slate-500"
                                    />
                                )}
                            </div>
                        </div>

                        {/* Action Icons */}
                        <div className="flex items-center">
                            <button className="hidden sm:flex w-10 h-10 items-center justify-center text-slate-300 hover:text-lime-400 transition-all duration-300 rounded-full hover:bg-white/10">
                                <User className="w-[18px] h-[18px]" />
                            </button>
                            <button className="hidden sm:flex w-10 h-10 items-center justify-center text-slate-300 hover:text-lime-400 transition-all duration-300 rounded-full hover:bg-white/10">
                                <Heart className="w-[18px] h-[18px]" />
                            </button>
                            <button className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-300 hover:text-lime-400 transition-all duration-300 rounded-full hover:bg-white/10">
                                <ShoppingCart className="w-[18px] h-[18px]" />
                                <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 bg-lime-500 text-slate-900 text-[10px] font-bold rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-300 hover:text-lime-400 transition-colors duration-300"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
                    mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 pb-4">
                    <div className="px-4 pt-3 pb-2">
                        <div className="flex items-center bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2.5 border border-slate-700/50">
                            <Search className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
                            <input
                                type="text"
                                placeholder="Buscar produtos..."
                                className="bg-transparent text-white text-sm outline-none w-full placeholder:text-slate-500"
                            />
                        </div>
                    </div>
                    <nav className="flex flex-col px-4 mt-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="py-3 text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-lime-400 transition-colors duration-300 border-b border-slate-800/50 last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    {/* Mobile-only action icons */}
                    <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-slate-800/50 sm:hidden">
                        <button className="flex items-center gap-2 text-slate-400 text-sm">
                            <User className="w-4 h-4" /> Minha Conta
                        </button>
                        <button className="flex items-center gap-2 text-slate-400 text-sm">
                            <Heart className="w-4 h-4" /> Favoritos
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}