import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';
import * as Icons from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 bg-gradient-to-b from-dark-900 to-black">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
            <h2 className="text-4xl font-serif text-white mb-4">Como Funciona</h2>
            <p className="text-gold uppercase tracking-widest text-sm">Do briefing ao resultado em 4 passos</p>
        </div>

        <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {PROCESS_STEPS.map((step, idx) => {
                    const IconComponent = (Icons as any)[step.icon] || Icons.Circle;

                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 bg-black border border-neutral-800 rounded-full flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                <IconComponent className="w-10 h-10 text-gray-500 group-hover:text-gold transition-colors" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center border border-black text-xs font-bold text-white">
                                    {step.id}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm mb-6">Integrado com as melhores ferramentas do mercado</p>
            <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Integration Logos with Text */}
                {['Zap Imóveis', 'OLX', 'Jetimob', 'Vista CRM', 'RD Station', 'Pipedrive', 'WhatsApp'].map(tool => (
                    <span key={tool} className="text-lg font-serif font-bold text-white border border-white/20 px-4 py-1 rounded">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
