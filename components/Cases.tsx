import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Cases: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="cases" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200 dark:from-neutral-900 to-transparent opacity-50 pointer-events-none transition-colors"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white mb-16 text-center">Resultados Reais</h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/80 dark:bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none"
              >
                <div className="relative shrink-0">
                    <img 
                        src={TESTIMONIALS[currentIndex].image} 
                        alt={TESTIMONIALS[currentIndex].client} 
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gold"
                    />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-electric rounded-full flex items-center justify-center text-black">
                        <Quote size={20} fill="black" />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <p className="text-xl md:text-2xl font-serif italic text-gray-800 dark:text-white mb-6 leading-relaxed">
                        "{TESTIMONIALS[currentIndex].testimonial}"
                    </p>
                    
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-wider">{TESTIMONIALS[currentIndex].client}</h4>
                        <p className="text-gray-500 text-sm">{TESTIMONIALS[currentIndex].role}</p>
                    </div>

                    {TESTIMONIALS[currentIndex].metric && (
                        <div className="mt-6 inline-block px-4 py-1 bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 rounded text-sm font-bold">
                            Resultado: {TESTIMONIALS[currentIndex].metric}
                        </div>
                    )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;