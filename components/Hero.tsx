import React from 'react';
import { motion } from 'framer-motion';

const MansionBlueprint = () => (
    <svg viewBox="0 0 400 300" className="w-full h-full opacity-20 blur-[0.5px]">
        <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0, 163, 255, 0)" />
                <stop offset="50%" stopColor="rgba(0, 163, 255, 0.5)" />
                <stop offset="100%" stopColor="rgba(0, 163, 255, 0)" />
            </linearGradient>
        </defs>
        {/* Base Structure */}
        <path d="M50 250 H350" stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" />
        <path d="M70 250 V150 H330 V250" stroke="#00A3FF" strokeWidth="0.8" fill="none" strokeDasharray="5,5" />
        
        {/* Columns */}
        <rect x="90" y="150" width="20" height="100" stroke="#00A3FF" strokeWidth="0.4" fill="none" />
        <rect x="290" y="150" width="20" height="100" stroke="#00A3FF" strokeWidth="0.4" fill="none" />
        <rect x="190" y="180" width="20" height="70" stroke="#00A3FF" strokeWidth="0.4" fill="none" />

        {/* Roof */}
        <path d="M60 150 L200 80 L340 150" stroke="#00A3FF" strokeWidth="1" fill="none" />
        <path d="M200 80 V250" stroke="#00A3FF" strokeWidth="0.4" strokeDasharray="2,2" />

        {/* Windows */}
        <rect x="130" y="170" width="40" height="40" stroke="#00A3FF" strokeWidth="0.4" fill="none" />
        <rect x="230" y="170" width="40" height="40" stroke="#00A3FF" strokeWidth="0.4" fill="none" />
        
        {/* Measurements */}
        <path d="M50 260 H350" stroke="#00A3FF" strokeWidth="0.1" />
        <text x="200" y="275" fill="#00A3FF" fontSize="8" textAnchor="middle" fontFamily="monospace" opacity="0.7">25.00m</text>
    </svg>
);

const Hero: React.FC = () => {
  const repeatedPhrase = Array(12).fill("Mais leads qualificados sem aumentar equipe");

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-20">
      
      {/* Background Blueprint Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="blueprint-grid absolute inset-0 opacity-10"></div>
        
        {/* Centered Blueprint graphic with "Building Up" Animation */}
        <div className="relative w-[1200px] h-[700px] max-w-full">
            {/* The Reveal Mask */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 3, ease: "easeOut" }} // Grows once, stops.
            >
               <div className="absolute bottom-0 left-0 w-full h-full">
                   <MansionBlueprint />
               </div>
            </motion.div>

            {/* Subtle Scanning Light Line - Runs continuously */}
            <motion.div
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric/40 to-transparent shadow-[0_0_10px_rgba(0,163,255,0.3)]"
                initial={{ top: "0%", opacity: 0 }}
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ 
                    duration: 6, 
                    ease: "linear", 
                    repeat: Infinity, 
                    repeatDelay: 1 
                }}
            />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500"
        >
          Eliminamos Trabalho <br/> 
          <span>Manual com IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light"
        >
          Automatize prospecção, qualifique leads e feche mais negócios.
          <br className="hidden md:block" />
          <span className="font-bold text-white block mt-4 text-xl">24/7 transformando leads em contratos.</span>
        </motion.p>

        <motion.a
          href="#agendamento"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold text-black font-tech font-bold uppercase tracking-[0.2em] py-4 px-10 text-sm border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Falar com especialista</span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
        </motion.a>

      </div>

      {/* Kinetic Text Slider */}
      <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/60 backdrop-blur-md py-6 overflow-hidden">
        <div className="flex w-full items-center">
          <motion.div 
            className="flex gap-16 md:gap-24 whitespace-nowrap min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...repeatedPhrase].map((text, idx) => (
              <div 
                key={idx} 
                className="text-gray-600 font-tech text-lg md:text-xl font-semibold uppercase tracking-[0.15em] hover:text-gold transition-colors cursor-default"
              >
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;