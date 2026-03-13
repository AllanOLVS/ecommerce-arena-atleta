import React from "react";
import { Truck, RefreshCw, CreditCard, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
    { icon: Truck, label: "Frete Grátis", sub: "Pedidos acima de R$ 199" },
    { icon: RefreshCw, label: "1ª Troca Grátis", sub: "Em até 30 dias" },
    { icon: CreditCard, label: "Até 10x", sub: "Sem juros" },
    { icon: ShieldCheck, label: "Compra Segura", sub: "Criptografia SSL" },
];

export default function TrustBar() {
    return (
        <section className="bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
                    {TRUST_ITEMS.map((item) => (
                        <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                            <div className="shrink-0 w-11 h-11 rounded-xl bg-lime-50 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-lime-600" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-slate-900 leading-tight truncate">
                                    {item.label}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5 truncate">{item.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}