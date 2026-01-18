import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">Perguntas Frequentes</h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-white/10">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className={`text-lg font-medium transition-colors ${activeIndex === idx ? 'text-gold' : 'text-white group-hover:text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className="text-gold">
                  {activeIndex === idx ? <Minus /> : <Plus />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
