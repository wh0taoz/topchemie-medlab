import React from 'react';
import { Calendar, MapPin, Users, Award, ArrowUpRight } from 'lucide-react';

const SajmoviKongresi: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">Sajmovi i Kongresi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light px-4 sm:px-0">
            Redovno učestvujemo na najvažnijim medicinskim i farmaceutskim sajmovima
            i kongresima u regionu i svetu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Sajmovi</div>
                <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Region</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Regionalni sajmovi
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                Aktivno učešće na vodećim medicinskim sajmovima u Srbiji, regionu i Evropi.
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Kongresi</div>
                <div className="flex items-center gap-2 bg-[#586F7C]/10 text-[#586F7C] px-3 py-1 rounded-full text-sm">
                  <Users className="h-4 w-4" />
                  <span>Stručni</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Stručni kongresi
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                Učešće na međunarodnim kongresima i stručnim skupovima iz oblasti medicine.
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Demo</div>
                <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                  <Award className="h-4 w-4" />
                  <span>Prezentacije</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Demo prezentacije
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed">
                Predstavljanje naših proizvoda i inovacija kroz prezentacije i demo sesije.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900 tracking-tight">Nadolazeći Događaji</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Medicus Congress 2024</h3>
                  <p className="text-gray-600 font-light mb-3 text-sm">
                    Međunarodni kongres medicine sa fokusom na najnovije tehnologije
                  </p>
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">15-17. Oktobar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Beograd, Srbija</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2F4550]/10 text-[#2F4550]">
                    Potvrdili učešće
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">EuroPharm Expo 2024</h3>
                  <p className="text-gray-600 font-light mb-3 text-sm">
                    Vodeći evropski sajam farmaceutske industrije
                  </p>
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">5-8. Novembar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Frankfurt, Nemačka</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#586F7C]/10 text-[#586F7C]">
                    Planirano učešće
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900">Green Tech Summit 2024</h3>
                  <p className="text-gray-600 font-light mb-3 text-sm">
                    Konferencija o ekološkim tehnologijama i održivom razvoju
                  </p>
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">20-22. Decembar 2024</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Ljubljana, Slovenija</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#2F4550]/10 text-[#2F4550]">
                    Potvrdili učešće
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Prethodna Učešća</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>MedTech Serbia 2023 - Beograd</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Pharmacon 2023 - Zagreb</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>EcoForum 2023 - Ljubljana</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Balkan Pharma 2023 - Sofija</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Health Innovation Summit 2023 - Budimpešta</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-medium mb-4 text-gray-900">Što Možete Očekivati</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Predstavljanje najnovijih proizvoda</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Demonstracije opreme i tehnologija</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Stručne prezentacije</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Direktan kontakt sa našim ekspertima</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <span>Mogućnost testiranja proizvoda</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-light mb-6 text-gray-900 tracking-tight">Zakazivanje Sastanaka</h2>
          <p className="text-gray-600 font-light mb-6 text-sm leading-relaxed">
            Želite da se sastanete sa našim timom na nekom od nadolazećih događaja?
            Kontaktirajte nas unapred da zakazate sastanak i dogovorite demonstraciju
            naših proizvoda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Zakažite Sastanak
            </a>
            <a
              href="mailto:info@topchemie-medlab.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-blue-600 font-medium rounded-full border border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Pošaljite Email
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">Pratite Naše Aktivnosti</h2>
          <p className="text-gray-600 font-light mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            Budite u toku sa našim učešćima na sajmovima i kongresima kroz naše
            komunikacione kanale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SajmoviKongresi;