import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Kosmetikinstitut Nefertiti</strong><br />
                Inhaberin: Sawsan Shaban<br />
                Kölner Straße 40<br />
                53840 Troisdorf
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h3>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                Telefon: <a href="tel:+4901792305389" className="text-pink-600 hover:text-pink-700">01792305389</a><br />
                E-Mail: <a href="mailto:sawsan.shaban23@gmail.com" className="text-pink-600 hover:text-pink-700">sawsan.shaban23@gmail.com</a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                Sawsan Shaban<br />
                Kölner Straße 40<br />
                53840 Troisdorf
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;