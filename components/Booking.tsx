import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, AlertTriangle, Zap } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="agendamento" className="py-24 bg-white dark:bg-neutral-950 border-t border-gold/20 relative overflow-hidden transition-colors duration-300">
        {/* Glow effect */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-950/40 border border-red-500/30 rounded-full mb-6 backdrop-blur">
            <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-500" />
            <span className="text-red-600 dark:text-red-400 text-xs font-bold font-tech uppercase tracking-[0.2em]">Apenas 3 vagas esta semana</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">
          Agende sua Consultoria
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 font-tech text-lg">Gratuito • 30 Minutos • Estratégia Personalizada</p>

        <div className="bg-gray-100/60 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 max-w-5xl mx-auto shadow-2xl h-[600px] flex items-center justify-center relative overflow-hidden transition-colors">
             <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
            
            {/* Simulated Cal.com Embed */}
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-4 relative z-10">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex items-center justify-center mb-4">
                     <Calendar className="w-8 h-8 text-gold" />
                </div>
               
                <p className="text-xl font-serif text-gray-900 dark:text-white">Carregando calendário...</p>
                <div className="w-full max-w-md h-[2px] bg-gray-300 dark:bg-neutral-800 rounded-full overflow-hidden mt-4">
                    <motion.div 
                        className="h-full bg-gold shadow-[0_0_10px_#D4AF37]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-600 mt-6 max-w-sm font-tech uppercase tracking-wider">
                    Conectando ao servidor seguro Korbel...
                </p>
            </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-3 text-gold/80 mb-2">
                <Zap className="w-4 h-4" />
                <p className="text-sm font-bold font-tech uppercase tracking-widest">Valor Agregado</p>
            </div>
            <p className="text-xl md:text-2xl font-serif text-gray-800 dark:text-white max-w-2xl">
                "Normalmente R$500/hora uma consultoria com engenheiro de automações comerciais"
            </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;