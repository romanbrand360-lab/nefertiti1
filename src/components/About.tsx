import React from 'react';
import { Heart, Sparkles, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die Susan Beauty Akademie steht für höchste Qualität in der Kosmetikbranche. 
            Mit jahrelanger Erfahrung und Leidenschaft für Schönheit bieten wir Ihnen 
            erstklassige Behandlungen in entspannter Atmosphäre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Kosmetikbehandlung" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Unsere Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bei der Susan Beauty Akademie glauben wir daran, dass jeder Mensch das Recht hat, 
              sich schön und selbstbewusst zu fühlen. Unser erfahrenes Team verwendet nur die 
              besten Produkte und modernste Techniken, um Ihnen die bestmöglichen Ergebnisse zu liefern.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Wir legen großen Wert auf individuelle Beratung und maßgeschneiderte Behandlungen, 
              die auf Ihre spezifischen Bedürfnisse und Wünsche abgestimmt sind.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-pink-600 mr-2" />
                <span className="text-gray-700">Zertifizierte Kosmetikerin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Was unsere Kunden sagen</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lesen Sie die Erfahrungen unserer zufriedenen Kunden und überzeugen Sie sich selbst von unserer Qualität.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Absolut professionelle Behandlung! Ich fühle mich hier sehr wohl und die Ergebnisse sind fantastisch."
              </p>
              <p className="text-gray-800 font-semibold">- Maria K.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Das Studio ist wunderschön eingerichtet und die Atmosphäre ist sehr entspannend. Komme gerne wieder!"
              </p>
              <p className="text-gray-800 font-semibold">- Sarah L.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Sawsan ist eine echte Expertin! Die Beratung war ausführlich und das Ergebnis übertrifft meine Erwartungen."
              </p>
              <p className="text-gray-800 font-semibold">- Anna M.</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/maps/place/Susan+Beauty+Akademie/@50.8143359,7.1567428,17z/data=!3m1!4b1!4m6!3m5!1s0x47bedf91c94e7b19:0xeaf158af5ae78438!8m2!3d50.8143325!4d7.1593177!16s%2Fg%2F11x8c30wmn?authuser=1&entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg"
            >
              ⭐ Bewerte uns auf Google
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Leidenschaft</h4>
            <p className="text-gray-600">
              Wir lieben was wir tun und setzen uns mit Herzblut für Ihre Schönheit ein.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Qualität</h4>
            <p className="text-gray-600">
              Nur die besten Produkte und modernste Behandlungsmethoden kommen zum Einsatz.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Beratung</h4>
            <p className="text-gray-600">
              Individuelle Beratung und maßgeschneiderte Lösungen für jeden Hauttyp.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Erfahrung</h4>
            <p className="text-gray-600">
              Über 10 Jahre Erfahrung in der professionellen Kosmetikbranche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;