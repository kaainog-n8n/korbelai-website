import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Sobre a Korbel AI</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Automação inteligente para <br/>
              <span className="text-electric italic">atendimento e qualificação de leads</span>
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Eliminamos processos repetitivos que consomem o dia dos corretores: disparos manuais exaustivos, triagem de leads curiosos sem potencial e atualizações manuais no CRM.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nossos agentes IA atendem dúvidas 24/7, qualificam intenções reais e direcionam leads quentes automaticamente — liberando sua equipe para negociações estratégicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-gold mb-1">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Leads Atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold mb-1">+60%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Conversão</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold mb-1">90%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Satisfação</p>
              </div>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
          >
            {/* Fake UI Overlay */}
            <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center pl-1 bg-black/50 backdrop-blur-md transition-transform group-hover:scale-110">
                    <Play className="text-gold w-8 h-8" fill="#D4AF37" />
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="font-mono text-xs text-electric">DEMO: Hunter-SDR Autopilot v2.0</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;