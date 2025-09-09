import React from 'react';
import { Award, Users, Clock, CheckCircle, Star, Phone, MessageCircle } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      id: 1,
      title: "Permanent Make-Up Komplettkurs",
      subtitle: "Ihre Eintrittskarte in die Welt des PMU",
      price: "ab 1.999€",
      originalPrice: "2.499€",
      duration: "5 Tage Intensivkurs",
      participants: "Max. 6 Teilnehmer",
      level: "Einsteiger & Fortgeschrittene",
      description: "Werden Sie zur gefragten PMU-Expertin! Unser Komplettkurs vermittelt Ihnen alle modernen Techniken des Permanent Make-Up. Von den Grundlagen bis zur Perfektion - in nur 5 Tagen erlernen Sie das Handwerk, das Ihre berufliche Zukunft prägen wird.",
      highlights: [
        "Modernste PMU-Techniken (Powder Brows, Kombi-Brows)",
        "Professionelle Lippenpigmentierung",
        "Umfassende Hygiene- und Hautkunde",
        "Farblehre und Kundenberatung",
        "Praxis an echten Modellen",
        "Komplettes Starter-Set (Wert: 800€)",
        "Anerkanntes Abschlusszertifikat",
      ],
      benefits: [
        "Sofortiger Berufseinstieg möglich",
        "Durchschnittliches Einkommen: 80-150€/Behandlung",
        "Flexible Arbeitszeiten",
        "Hohe Nachfrage am Markt"
      ]
    },
    {
      id: 2,
      title: "Lippenpigmentierung-Spezialkurs",
      subtitle: "Perfekte Lippen - Ihre Spezialisierung",
      price: "999€",
      originalPrice: "1.299€",
      duration: "2 Tage Intensiv",
      participants: "Max. 4 Teilnehmer",
      level: "Einsteiger geeignet",
      description: "Spezialisieren Sie sich auf die Königsdisziplin der Lippenpigmentierung! Lernen Sie die neuesten Techniken für natürlich schöne, perfekt geformte Lippen. Dieser Kurs macht Sie zur Expertin für eine der gefragtesten Beauty-Behandlungen.",
      highlights: [
        "Neueste Lippenpigmentierungs-Techniken",
        "Lippenformen-Analyse und -Korrektur",
        "Farbauswahl und Mischverhältnisse",
        "Heilungsprozess und Nachbehandlung",
        "1:1 Betreuung garantiert",
        "Arbeit an echten Modellen",
        "Anerkanntes Branchenzertifikat",
        "Starter-Set inklusive"
      ],
      benefits: [
        "100% praxisorientierte Ausbildung",
        "Kleine Gruppengröße für optimales Lernen",
        "Sofort anwendbares Wissen",
        "Hohe Gewinnmargen (120-200€/Behandlung)"
      ]
    },
    {
      id: 3,
      title: "Wimpernverlängerung Profikurs",
      subtitle: "Traumhafte Wimpern - Ihr Erfolgsgarant",
      price: "999€",
      originalPrice: "1.199€",
      duration: "3 Tage Kompakt",
      participants: "Max. 6 Teilnehmer",
      level: "Alle Levels",
      description: "Werden Sie zur Wimpern-Expertin! Die Nachfrage nach professioneller Wimpernverlängerung boomt. In unserem Profikurs erlernen Sie alle Techniken für perfekte, langanhaltende Wimpernextensions. Starten Sie durch in einem der lukrativsten Beauty-Bereiche!",
      highlights: [
        "Alle gängigen Verlängerungs-Techniken",
        "Wimperntypen und Augenformen-Analyse",
        "Hygiene und Sicherheitsstandards",
        "Verschiedene Curl-Arten und Längen",
        "Praxis an echten Kundenmodellen",
        "Komplettes Profi-Starter-Set",
        "Branchenzertifikat",
      ],
      benefits: [
        "Sofortiger Berufseinstieg möglich",
        "Regelmäßige Stammkunden garantiert",
        "Flexible Selbstständigkeit",
        "Durchschnittseinkommen: 60-120€/Behandlung"
      ]
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Professionelle Beauty Schulungen
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Starten Sie Ihre Karriere in der 
            <span className="block text-pink-600">Beauty-Branche</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Verwirklichen Sie Ihren Traum von der Selbstständigkeit! Unsere zertifizierten Beauty Schulungen 
            bieten Ihnen das komplette Know-how für einen erfolgreichen Einstieg in die boomende Kosmetikbranche. 
            Von Permanent Make-Up bis Wimpernverlängerung - werden Sie zur gefragten Beauty-Expertin mit 
            unseren praxisorientierten Intensivkursen.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Warum Susan Beauty Akademie?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Zertifizierte Ausbildung</h3>
              <p className="text-gray-600 text-sm">Anerkannte Zertifikate für Ihren professionellen Erfolg</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kleine Gruppen</h3>
              <p className="text-gray-600 text-sm">Maximale Aufmerksamkeit durch begrenzte Teilnehmerzahl</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Praxis-Fokus</h3>
              <p className="text-gray-600 text-sm">Lernen Sie an echten Modellen unter Expertenanleitung</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Komplettpaket</h3>
              <p className="text-gray-600 text-sm">Alle Materialien und Starter-Sets inklusive</p>
            </div>
          </div>
        </div>

        {/* Training Courses */}
        <div className="space-y-12">
          {trainings.map((training, index) => (
            <div key={training.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {training.level}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Zertifiziert
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{training.title}</h2>
                  <p className="text-xl text-pink-600 font-medium mb-4">{training.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{training.description}</p>

                  {/* Course Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{training.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{training.participants}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Zertifikat</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-pink-600">{training.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-3">{training.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium ml-3">
                      Limitiertes Angebot
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="https://wa.me/4901792305389"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Beratung
                    </a>
                    <a 
                      href="tel:+4901792305389"
                      className="flex items-center justify-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anrufen
                    </a>
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="bg-gray-50 p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kursinhalte & Highlights</h3>
                  <ul className="space-y-3 mb-8">
                    {training.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Ihre Vorteile</h4>
                  <ul className="space-y-2">
                    {training.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihre Beauty-Karriere?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Lassen Sie sich unverbindlich beraten! Unsere Experten helfen Ihnen bei der Auswahl 
            des perfekten Kurses für Ihre Ziele. Starten Sie noch heute in Ihre erfolgreiche Zukunft 
            als Beauty-Expertin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/4901792305389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Kostenlose WhatsApp Beratung
            </a>
            <a 
              href="tel:+4901792305389"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-pink-600 transition-colors transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Sofort anrufen: +49 01792305389
            </a>
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Über 200 erfolgreiche Absolventinnen
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unsere Schülerinnen haben sich erfolgreich selbstständig gemacht oder ihre Karriere 
            in etablierten Beauty-Studios gestartet. Werden auch Sie Teil unserer Erfolgsgeschichte!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Training;