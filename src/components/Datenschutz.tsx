import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Allgemeine Hinweise und Pflichtinformationen</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Der Schutz Ihrer persönlichen Daten ist uns ein großes Anliegen. Wir verarbeiten Ihre personenbezogenen 
              Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG). In dieser 
              Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen 
              unserer Website.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verantwortliche Stelle</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Kosmetikinstitut Nefertiti</strong><br />
                Inhaberin: Sawsan Shaban<br />
                Kölner Straße 40<br />
                53840 Troisdorf<br />
                Telefon: <a href="tel:+4901792305389" className="text-pink-600 hover:text-pink-700">01792305389</a><br />
                E-Mail: <a href="mailto:sawsan.shaban23@gmail.com" className="text-pink-600 hover:text-pink-700">sawsan.shaban23@gmail.com</a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir erheben personenbezogene Daten, wenn Sie mit uns über die Webseite in Kontakt treten oder unsere 
              Dienstleistungen in Anspruch nehmen. Dies betrifft insbesondere die folgenden Daten:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Weitere freiwillige Angaben, die Sie uns zur Verfügung stellen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Zweck der Datenverarbeitung</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Verarbeitung Ihrer Daten erfolgt zu folgenden Zwecken:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Beantwortung Ihrer Anfragen</li>
              <li>Durchführung von Buchungen und Terminen</li>
              <li>Verwaltung von Kundenbeziehungen</li>
              <li>Zusendung von Informationen und Angeboten, falls Sie dies ausdrücklich wünschen</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Rechtsgrundlage der Datenverarbeitung</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die Verarbeitung Ihrer Daten erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder, 
              falls erforderlich, zur Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dauer der Datenspeicherung</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich 
              ist, für die sie erhoben wurden, oder solange gesetzliche Aufbewahrungspflichten bestehen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Rechte</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Sie haben das Recht:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Die Berichtigung oder Löschung Ihrer Daten zu verlangen</li>
              <li>Der Verarbeitung Ihrer Daten zu widersprechen</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen</li>
              <li>Ihre Einwilligung jederzeit zu widerrufen</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bitte wenden Sie sich hierzu an die oben genannte Kontaktadresse.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sicherheit Ihrer Daten</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten vor Verlust, 
              Missbrauch und unbefugtem Zugriff zu schützen.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Änderungen der Datenschutzerklärung</h3>
            <p className="text-gray-700 leading-relaxed">
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version 
              finden Sie auf dieser Seite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;