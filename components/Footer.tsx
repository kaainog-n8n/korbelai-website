import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const DobermanLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 130" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0L30 30L50 25L70 30L80 0L95 40L80 60L85 90L50 130L15 90L20 60L5 40L20 0Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M30 30L35 60L50 75L65 60L70 30" stroke="currentColor" strokeWidth="1"/>
    <path d="M35 50L25 55" stroke="currentColor" strokeWidth="1"/>
    <path d="M65 50L75 55" stroke="currentColor" strokeWidth="1"/>
    <path d="M40 85L50 95L60 85" stroke="currentColor" strokeWidth="2"/>
    <path d="M50 75V95" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10 font-sans transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                <DobermanLogo className="w-10 h-10 text-gold" />
                <span className="text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-widest">
                    KORBEL <span className="text-gold">AI</span>
                </span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-6 font-tech text-lg">
                O estúdio premium de inteligência artificial focado em escalar resultados para o mercado imobiliário de alto padrão.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-gray-300 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gold hover:border-gold transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-gray-300 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gold hover:border-gold transition-all">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-gray-300 dark:border-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gold hover:border-gold transition-all">
                    <Mail size={18} />
                </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold font-tech uppercase tracking-[0.2em] mb-6 text-sm">Empresa</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-500 text-sm">
                <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
                <li><a href="#cases" className="hover:text-gold transition-colors">Cases de Sucesso</a></li>
                <li><a href="#projetos" className="hover:text-gold transition-colors">Nossos Serviços</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold font-tech uppercase tracking-[0.2em] mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-600 dark:text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">LGPD</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold font-tech uppercase tracking-[0.2em] mb-6 text-sm">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-500 text-sm mb-4">Receba insights exclusivos sobre IA imobiliária.</p>
            <form className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-800 text-gray-900 dark:text-white px-4 py-3 rounded text-sm focus:outline-none focus:border-gold transition-colors font-tech"
                />
                <button className="bg-gold text-black font-bold font-tech uppercase tracking-widest text-sm py-3 rounded hover:bg-white transition-colors">
                    Inscrever-se
                </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-300 dark:border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-tech uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} Korbel AI. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 md:mr-24">Feito em São Paulo para o Mundo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;