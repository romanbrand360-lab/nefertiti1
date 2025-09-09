import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
            Wir freuen uns auf Ihren Besuch in der Susan Beauty Akademie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Kölner Straße 40<br />
                      53840 Troisdorf
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <a 
                      href="tel:+4901792305389" 
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      +49 01792305389
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-Mail</h4>
                    <a 
                      href="mailto:sawsan.shaban23@gmail.com" 
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      sawsan.shaban23@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Öffnungszeiten</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Montag - Freitag: 10:00 - 18:00 Uhr</p>
                      <p>Samstag: 12:00 - 16:00 Uhr</p>
                      <p>Sonntag: Nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4">Schnell einen Termin vereinbaren</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/4901792305389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Termin über WhatsApp
                </a>
                <a 
                  href="tel:+4901792305389"
                  className="flex items-center w-full px-4 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Jetzt anrufen
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Termine sind ausschließlich über WhatsApp oder telefonisch möglich.
              </p>
            </div>

          </div>

          {/* Map/Image */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
              <a 
                href="https://www.google.com/maps/dir//Kölner+Str.+40,+53840+Troisdorf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.8!2d7.159!3d50.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bedf91c94e7b19%3A0xeaf158af5ae78438!2sKölner%20Str.%2040%2C%2053840%20Troisdorf!5e0!3m2!1sde!2sde!4v1640000000000!5m2!1sde!2sde"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Susan Beauty Akademie Standort"
                  className="hover:opacity-90 transition-opacity"
                ></iframe>
              </a>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Unser Standort</h4>
                <p className="text-gray-600">
                  Kölner Str. 40, 53840 Troisdorf. Klicken Sie auf die Karte für eine Wegbeschreibung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;