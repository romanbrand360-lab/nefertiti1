import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/Blume.jpeg",
      alt: "Blumendekoration im Studio"
    },
    {
      src: "/Liege 2.jpeg", 
      alt: "Behandlungsliege 2"
    },
    {
      src: "/Theke.jpeg",
      alt: "Empfangstheke"
    },
    {
      src: "/x.jpeg",
      alt: "Studio Ansicht"
    },
    {
      src: "/Liege.jpeg",
      alt: "Behandlungsliege"
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Besuchen Sie uns in unserem modernen Studio und erleben Sie Wellness in entspannter Atmosphäre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/491792305389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Termin über WhatsApp vereinbaren
            </a>
            <a 
              href="tel:+491792305389"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
            >
              Jetzt anrufen: +49 179 2305389
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;