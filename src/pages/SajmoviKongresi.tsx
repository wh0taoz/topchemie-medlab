import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const SajmoviKongresi: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="h-16 w-16 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Sajmovi i Kongresi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redovno učestvujemo na najvažnijim medicinskim i farmaceutskim sajmovima
            i kongresima u regionu i svetu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <MapPin className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Regionalni Sajmovi</h3>
            <p className="text-gray-600">
              Aktivno učešće na vodećim medicinskim sajmovima u Srbiji, regionu i Evropi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Users className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Stručni Kongresi</h3>
            <p className="text-gray-600">
              Učešće na međunarodnim kongresima i stručnim skupovima iz oblasti medicine.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Award className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Prezentacije</h3>
            <p className="text-gray-600">
              Predstavljanje naših proizvoda i inovacija kroz prezentacije i demo sesije.
            </p>
          </div>
        </div>

        <div className="bg-orange-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nadolazeći Događaji</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Medicus Congress 2024</h3>
                  <p className="text-gray-600 mb-2">
                    Međunarodni kongres medicine sa fokusom na najnovije tehnologije
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">15-17. Oktobar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Beograd, Srbija</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Potvrdili učešće
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">EuroPharm Expo 2024</h3>
                  <p className="text-gray-600 mb-2">
                    Vodeći evropski sajam farmaceutske industrije
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">5-8. Novembar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Frankfurt, Nemačka</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Planirano učešće
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Green Tech Summit 2024</h3>
                  <p className="text-gray-600 mb-2">
                    Konferencija o ekološkim tehnologijama i održivom razvoju
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">20-22. Decembar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Ljubljana, Slovenija</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Potvrdili učešće
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Prethodna Učešća</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• MedTech Serbia 2023 - Beograd</li>
              <li>• Pharmacon 2023 - Zagreb</li>
              <li>• EcoForum 2023 - Ljubljana</li>
              <li>• Balkan Pharma 2023 - Sofija</li>
              <li>• Health Innovation Summit 2023 - Budimpešta</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Što Možete Očekivati</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Predstavljanje najnovijih proizvoda</li>
              <li>• Demonstracije opreme i tehnologija</li>
              <li>• Stručne prezentacije</li>
              <li>• Direktan kontakt sa našim ekspertima</li>
              <li>• Mogućnost testiranja proizvoda</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Zakazivanje Sastanaka</h2>
          <p className="text-gray-600 mb-4">
            Želite da se sastanete sa našim timom na nekom od nadolazećih događaja?
            Kontaktirajte nas unapred da zakazate sastanak i dogovorite demonstraciju
            naših proizvoda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
            >
              Zakažite Sastanak
            </a>
            <a
              href="mailto:info@topchemie-medlab.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors"
            >
              Pošaljite Email
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Pratite Naše Aktivnosti</h2>
          <p className="text-gray-600 mb-6">
            Budite u toku sa našim učešćima na sajmovima i kongresima kroz naše
            komunikacione kanale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SajmoviKongresi;