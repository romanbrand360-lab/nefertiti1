import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="flex justify-between items-center py-2 md:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Susan Beauty Akademie.jpeg" 
              alt="Susan Beauty Akademie Logo" 
              className="h-12 w-12 object-cover rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Susan Beauty Akademie</h1>
              <p className="text-sm text-gray-600">Professionelle Kosmetik</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('training')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Schulungen
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Kontakt
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://wa.me/4901792305389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <a 
              href="tel:+4901792305389"
              className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              Anrufen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Über uns
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Leistungen
              </button>
              <button 
                onClick={() => scrollToSection('training')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Schulungen
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Kontakt
              </button>
              
              {/* Mobile Contact Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a 
                  href="https://wa.me/4901792305389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  onClick={closeMenu}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Termin
                </a>
                <a 
                  href="tel:+4901792305389"
                  className="flex items-center justify-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
                  onClick={closeMenu}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
};

export default Header;