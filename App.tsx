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

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-gold selection:text-black">
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
    </div>
  );
}

export default App;
