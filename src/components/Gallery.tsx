import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Werfen Sie einen Blick auf unsere Arbeit und lassen Sie sich von den Ergebnissen 
            unserer professionellen Behandlungen inspirieren.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Besuchen Sie uns in unserem modernen Studio und erleben Sie Wellness in entspannter Atmosphäre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/4901792305389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Termin über WhatsApp vereinbaren
            </a>
            <a 
              href="tel:+4901792305389"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
            >
              Jetzt anrufen: +49 01792305389
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;