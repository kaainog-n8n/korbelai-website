import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Cases from './components/Cases';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen text-gray-900 dark:text-white selection:bg-gold selection:text-black transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Cases />
        <Comparison />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;