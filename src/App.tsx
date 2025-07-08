import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;