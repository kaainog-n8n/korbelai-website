import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

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

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Initialization and Change
  useEffect(() => {
    const savedTheme = localStorage.getItem('korbel-theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('korbel-theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <motion.nav
        initial={{ height: 100 }}
        animate={{ 
          height: isScrolled ? 70 : 100,
          backgroundColor: isScrolled 
            ? (theme === 'dark' ? 'rgba(5,5,5,0.9)' : 'rgba(255,255,255,0.9)') 
            : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent data-[scrolled=true]:border-gold/20 flex items-center justify-between px-6 md:px-12 w-full transition-colors"
        data-scrolled={isScrolled}
      >
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <DobermanLogo className="w-10 h-10 text-gold transition-transform group-hover:scale-105 relative z-10" />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-widest transition-colors">
            KORBEL <span className="text-gold">AI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-tech uppercase font-bold tracking-[0.2em] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Desktop */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gold"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#agendamento"
            className={`px-6 py-2 border border-gold text-gold font-tech font-bold uppercase text-xs tracking-[0.15em] hover:bg-gold hover:text-black transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            Falar com especialista
          </a>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gold"
            >
               {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              className="text-gold"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-black flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-8 right-8 text-gray-900 dark:text-white hover:text-gold"
              onClick={() => setIsMobileOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>

            {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-3xl font-serif text-gray-900 dark:text-white hover:text-gold transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href="#agendamento"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-8 py-3 bg-gold text-black font-tech font-bold uppercase tracking-widest"
            >
              Agendar Agora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;