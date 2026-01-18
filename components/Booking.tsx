import React from 'react';
import { AlertTriangle, Zap } from 'lucide-react';

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

        <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-2xl h-[700px] relative transition-colors">
            <iframe 
              src="https://cal.com/kaio-nog-ai-nl9fcw?embed=true"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Agendamento Korbel AI"
              allow="camera; microphone; autoplay; fullscreen"
            ></iframe>
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