import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Facial",
      description: "Professionelle Gesichtsbehandlung für strahlende und gesunde Haut mit individueller Pflege.",
      price: "ab 69€",
      duration: "60 Min"
    },
    {
      title: "Microneedling",
      description: "Innovative Hautverbesserung durch Microneedling für ein strafferes und jugendlicheres Hautbild.",
      price: "ab 85€",
      duration: "90 Min"
    },
    {
      title: "BB Glow",
      description: "Semi-permanente Foundation-Behandlung für einen natürlichen, makellosen Teint.",
      price: "ab 75€",
      duration: "120 Min"
    },
    {
      title: "Algen Peeling",
      description: "Intensives Peeling mit Meeresalgen für eine tiefgreifende Hauterneuerung und Regeneration.",
      price: "ab 120€",
      duration: "75 Min"
    },
    {
      title: "Aquapeeler",
      description: "Sanfte Tiefenreinigung und Hydratation der Haut mit modernster Aquapeeling-Technologie.",
      price: "ab 99€",
      duration: "60 Min"
    },
    {
      title: "Gesichtsreinigung",
      description: "Gründliche Reinigung der Haut mit Entfernung von Unreinheiten und Mitessern.",
      price: "ab 40€",
      duration: "45 Min"
    },
    {
      title: "Wimpernlifting / Brow Lifting",
      description: "Natürliche Wimpern- und Augenbrauenformung für einen ausdrucksstarken Blick.",
      price: "ab 49€",
      duration: "60 Min"
    },
    {
      title: "Henna Brows",
      description: "Natürliche Augenbrauenfärbung mit Henna für langanhaltende, perfekt geformte Brauen.",
      price: "ab 35€",
      duration: "45 Min"
    },
    {
      title: "Microblading",
      description: "Semi-permanente Augenbrauen-Pigmentierung für natürlich aussehende, perfekte Brauen.",
      price: "ab 150€",
      duration: "180 Min"
    },
    {
      title: "Plasmabehandlung",
      description: "Innovative Plasma-Technologie für Hautstraffung und Faltenreduktion ohne Operation.",
      price: "ab 59€",
      duration: "45 Min"
    },
    {
      title: "Dermapen mit Vitaminen",
      description: "Professionelle Microneedling-Behandlung mit hochwertigen Vitaminen für optimale Hauterneuerung.",
      price: "ab 79€",
      duration: "75 Min"
    },
    {
      title: "PRP Haut & Haare",
      description: "Eigenbluttherapie für natürliche Hautverjüngung und Haarwachstumsförderung.",
      price: "ab 100€",
      duration: "90 Min"
    },
    {
      title: "Laser Haarentfernung Ganzkörper",
      description: "Dauerhafte Haarentfernung am ganzen Körper mit modernster Laser-Technologie.",
      price: "ab 150€",
      duration: "120 Min"
    },
    {
      title: "Laser einzelne Zone",
      description: "Gezielte Laser-Haarentfernung für einzelne Körperzonen - präzise und effektiv.",
      price: "ab 49€",
      duration: "30 Min"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfangreiches Angebot an professionellen Kosmetikbehandlungen. 
            Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
                <div className="text-2xl font-bold text-pink-600">{service.price}</div>
              </div>

              <div className="flex space-x-2">
                <a 
                  href="https://wa.me/4901792305389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-pink-600 text-white text-center py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                >
                  WhatsApp
                </a>
                <a 
                  href="tel:+4901792305389"
                  className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Anrufen
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Haben Sie Fragen zu unseren Behandlungen oder möchten Sie einen Termin vereinbaren?
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

export default Services;