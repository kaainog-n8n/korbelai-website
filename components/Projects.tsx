import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Bot, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'automation' | 'website'>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.type === filter);

  return (
    <section id="projetos" className="py-24 bg-gray-50 dark:bg-black relative transition-colors duration-300">
        {/* Decorative divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4">Nossos Projetos</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            De automações complexas a sites imobiliários de alta conversão.
          </p>

          <div className="inline-flex p-1 bg-white dark:bg-neutral-900 rounded-full border border-gray-200 dark:border-white/10 shadow-sm transition-colors">
            {[
                { key: 'all', label: 'Todos' }, 
                { key: 'automation', label: 'Automação IA' }, 
                { key: 'website', label: 'Sites' }
            ].map((f) => (
                <button
                    key={f.key}
                    onClick={() => setFilter(f.key as any)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        filter === f.key 
                        ? 'bg-gold text-black shadow-lg shadow-gold/20' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                    {f.label}
                </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-gold/50 transition-colors shadow-sm hover:shadow-lg dark:shadow-none"
              >
                <div className="relative h-64 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60" 
                    />
                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full border border-black/10 dark:border-white/10 flex items-center gap-2">
                        {project.type === 'automation' ? <Bot className="w-3 h-3 text-electric" /> : <Globe className="w-3 h-3 text-gold" />}
                        <span className="text-xs uppercase tracking-wide font-bold text-gray-900 dark:text-white">{project.type}</span>
                    </div>
                </div>

                <div className="p-8">
                    <h3 className="text-2xl font-serif text-gray-900 dark:text-white mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider hover:text-electric transition-colors">
                        Ver Detalhes <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;