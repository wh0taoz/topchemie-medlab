import React from 'react';
import { TestTube, Heart, Shield, Award, Microscope, Activity, Stethoscope, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Medicina: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[75vh] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vials.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center h-full">
          <div className="w-full max-w-7xl mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Medicina
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                Nudimo širok spektar medicinskih i biocidnih sredstava i proizvoda za zdravstvene ustanove,
                ordinacije i laboratorije
              </p>
              <div className="flex justify-center">
                <a
                  href="#proizvodi"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Pogledajte Proizvode
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* 01 - Dijagnostička Oprema */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-[#2563eb]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">01</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Efikasno</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Efikasno
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Naši proizvodi obezbeđuju snažno čišćenje i dezinfekciju uz potpunu zaštitu materijala.
                  </p>
                </div>
              </div>

              {/* 02 - Zaštitna Oprema */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-[#2563eb]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">02</div>
                    <div className="flex items-center gap-2 bg-[#586F7C]/10 text-[#586F7C] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Bezbedno</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Bezbedno
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Sertifikovani, ekološki i biorazgradivi proizvodi garantuju sigurnu i pouzdanu upotrebu.
                  </p>
                </div>
              </div>

              {/* 03 - Sertifikovani Proizvodi */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-[#2563eb]/5 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">03</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Ekonomično</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Ekonomično
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Visokokvalitetni koncentrati omogućavaju maksimalnu efikasnost uz minimalne troškove.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="proizvodi" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
                NAŠI PROIZVODI
              </div>
              <h2 className="text-5xl font-light mb-8 text-gray-900 leading-tight">
                Detaljan pregled<br />
                <span className="font-normal">naše ponude</span>
                <div className="w-24 h-0.5 bg-[#2563eb] mx-auto mt-6"></div>
              </h2>
              <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Kompletna ponuda medicinske opreme i instrumenata za sve vrste zdravstvenih ustanova.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Napredna rešenja za čišćenje */}
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div className="mb-8">
                  <div className="text-5xl font-extralight text-gray-900 mb-4">AUTOMATSKA</div>
                  <div className="flex items-center gap-2 mb-6">
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-4xl font-light text-gray-900 mb-4 leading-tight">
                    Napredna rešenja<br />
                    za čišćenje
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-8">
                    Automatska obrada instrumenata za maksimalnu efikasnost i pouzdanost
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Čišćenje</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Neutralizacija</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Sredstva za ispiranje / sušenje</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Dezinfekcija</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Specijalni proizvodi / nega instrumenata</span>
                  </div>
                </div>
              </div>

              {/* Efikasna ručna obrada */}
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                <div className="mb-8">
                  <div className="text-5xl font-extralight text-gray-900 mb-4">MANUELNA</div>
                  <div className="flex items-center gap-2 mb-6">
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-4xl font-light text-gray-900 mb-4 leading-tight">
                    Efikasna ručna<br />
                    obrada
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-8">
                    Čišćenje bez kompromisa uz maksimalnu kontrolu procesa
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Predpranje / Predtretman</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Čišćenje</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full"></div>
                    <span className="text-gray-700 font-light text-sm">Dezinfekcija</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-8 text-gray-900 leading-tight">
                Naša misija je da unapredimo<br />
                <span className="font-normal">standarde higijene i bezbednosti</span>
                <div className="w-24 h-0.5 bg-[#2563eb] mx-auto mt-6"></div>
              </h2>
              <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Naša misija je da unapredimo standarde higijene i bezbednosti kroz uvoz i distribuciju vrhunskih proizvoda namenjenih profesionalnoj upotrebi. Posvećeni smo tome da našim partnerima i korisnicima obezbedimo inovativna, pouzdana i ekološki odgovorna rešenja koja olakšavaju svakodnevni rad i doprinose očuvanju zdravlja. Težimo dugoročnom poverenju, stalnom unapređenju i širenju svesti o značaju visokokvalitetnih proizvoda u oblastima čišćenja, dezinfekcije i nege instrumenata.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">20</div>
                <p className="text-gray-600 font-light text-sm mb-2">Godina Iskustva</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">50+</div>
                <p className="text-gray-600 font-light text-sm mb-2">Dostupnih Proizvoda</p>
                <div className="w-16 h-1 bg-[#586F7C] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">201</div>
                <p className="text-gray-600 font-light text-sm mb-2">Uspešnih Projekata</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-[#2563eb]/5 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">99.8%</div>
                <p className="text-gray-600 font-light">Pouzdanost Opreme</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-[#2563eb]/5 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#586F7C] to-[#2F4550] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">ISO 13485</div>
                <p className="text-gray-600 font-light">Međunarodna Sertifikacija</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-[#2563eb]/5 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">24/7</div>
                <p className="text-gray-600 font-light">Tehnička Podrška</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative h-[40vh] sm:h-[50vh] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center h-full py-8 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-16 items-center w-full max-w-7xl mx-auto">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                Potrebna su Vam Medicinska Sredstva?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-white/90 font-light leading-relaxed">
                Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                Kontaktirajte Nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medicina;