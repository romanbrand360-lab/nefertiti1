import React from 'react';
import { Heart, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Susan Beauty Akademie.jpeg" 
                alt="Susan Beauty Akademie Logo" 
                className="h-12 w-12 object-cover rounded-full mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">Susan Beauty Akademie</h3>
                <p className="text-gray-400">Ihre Experten für Schönheit</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professionelle Kosmetikbehandlungen in entspannter Atmosphäre. 
              Wir verwöhnen Sie mit individuellen Behandlungen und höchster Qualität.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#training" className="text-gray-400 hover:text-white transition-colors">
                  Schulungen
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-pink-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Kölner Str. 40<br />
                  53840 Troisdorf
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-pink-600 flex-shrink-0" />
                <a 
                  href="tel:+4901792305389" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +49 01792305389
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-pink-600 flex-shrink-0" />
                <a 
                  href="mailto:sawsan.shaban23@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  sawsan.shaban23@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <a 
                href="https://wa.me/4901792305389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a 
                href="tel:+4901792305389"
                className="flex items-center w-full px-3 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Anrufen
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Susan Beauty Akademie. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-pink-600" />
              <span>für Ihre Schönheit</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;