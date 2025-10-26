import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Blog />
    <Services />
    <Training />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;