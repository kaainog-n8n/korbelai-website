import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, Activity } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    { label: "Tempo de Implementação", diy: "Meses", agency: "4-6 Semanas", korbel: "1-2 Semanas" },
    { label: "Custo-Benefício (ROI)", diy: "Baixo", agency: "Médio", korbel: "Altíssimo" },
    { label: "Integração IA Nativa", diy: <X className="text-red-500 mx-auto" />, agency: <HelpCircle className="text-yellow-500 mx-auto" />, korbel: <Check className="text-green-400 mx-auto" /> },
    { label: "Personalização Setor Imobiliário", diy: <X className="text-red-500 mx-auto" />, agency: <Check className="text-gray-500 mx-auto" />, korbel: <Check className="text-green-400 mx-auto" /> },
    { label: "Comunicação", diy: "Sem suporte", agency: "Confie na sorte", korbel: "Diária (Recorrência)" },
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white">Compare as Opções</h2>
            <p className="text-gray-500 mt-4 font-tech text-lg">A escolha lógica para quem busca escala.</p>
        </div>

        <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[900px] border-collapse">
                <thead>
                    <tr>
                        <th className="text-left p-6 text-gray-500 font-tech font-bold uppercase tracking-widest text-sm w-1/4">Critério</th>
                        
                        {/* KORBEL COLUMN - FIRST */}
                        <th className="p-6 bg-neutral-900 rounded-t-xl border-t border-x border-gold/30 text-gold font-serif font-bold text-xl w-1/4 shadow-[0_-10px_30px_rgba(212,175,55,0.1)] relative">
                            <div className="flex items-center justify-center gap-2">
                                KORBEL AI
                            </div>
                        </th>

                        <th className="p-6 text-gray-400 font-serif font-semibold w-1/4">Faça Você Mesmo</th>
                        <th className="p-6 text-gray-400 font-serif font-semibold w-1/4">Outras Agências</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <motion.tr 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                        >
                            <td className="p-6 text-white font-medium font-tech text-lg">{row.label}</td>
                            
                            {/* KORBEL DATA */}
                            <td className="p-6 text-center bg-neutral-900/50 border-x border-gold/10 text-white font-bold relative group-hover:bg-neutral-900 transition-colors">
                                {idx === rows.length - 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>}
                                <span className="text-gold glow-sm">{row.korbel}</span>
                            </td>

                            <td className="p-6 text-center text-gray-500 font-tech">{row.diy}</td>
                            <td className="p-6 text-center text-gray-500 font-tech">{row.agency}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
