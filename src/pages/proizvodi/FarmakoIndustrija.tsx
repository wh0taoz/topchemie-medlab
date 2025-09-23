import React from 'react';
import { FlaskConical, Atom, Factory, Beaker, ArrowUpRight, Shield, Award, Activity } from 'lucide-react';

const FarmakoIndustrija: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[75vh] text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/vials_farmako.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center h-full">
          <div className="w-full max-w-7xl mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Farmako Industrija
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                Specijalizovani smo za snabdevanje farmaceutske industrije sa visokokvalitetnim sirovinama, opremom i tehnologijama
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
              {/* 01 - Farmaceutska Efikasnost */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">01</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Efikasno</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Farmaceutska<br />
                    Efikasnost
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Naši proizvodi obezbeđuju visoku efikasnost u farmaceutskim procesima uz potpunu kontrolu kvaliteta.
                  </p>
                </div>
              </div>

              {/* 02 - Sigurnost Proizvoda */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">02</div>
                    <div className="flex items-center gap-2 bg-[#586F7C]/10 text-[#586F7C] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Bezbedno</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Sigurnost<br />
                    Proizvoda
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    GMP sertifikovani proizvodi garantuju maksimalnu sigurnost i pouzdanost u farmaceutskoj proizvodnji.
                  </p>
                </div>
              </div>

              {/* 03 - Ekonomična Rešenja */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">03</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Ekonomično</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Ekonomična<br />
                    Rešenja
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Optimizovane formulacije omogućavaju maksimalnu produktivnost uz minimalne operativne troškove.
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
              </h2>
              <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Kompletna ponuda farmaceutskih sirovina, opreme i tehnologija za sve faze proizvodnje.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* CLEAN - Optimizacija procesa čišćenja */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="mb-6">
                  <div className="text-4xl font-extralight text-gray-900 mb-4">CLEAN</div>
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3 leading-tight">
                    Optimizacija procesa<br />
                    čišćenja
                  </h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed mb-6">
                    CLEAN nudi razvoj novih ili unapređenje postojećih procesa čišćenja kroz laboratorijske simulacije i "worst-case" testiranja.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Naučno utemeljeno testiranje</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Usklađeno sa cGMP</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Ušteda troškova</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Automatizovane procedure (CIP)</span>
                  </div>
                </div>
              </div>

              {/* Validacija čišćenja - GMP standard */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="mb-6">
                  <div className="text-4xl font-extralight text-gray-900 mb-4">GMP</div>
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3 leading-tight">
                    Validacija čišćenja<br />
                    GMP standard
                  </h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed mb-6">
                    Validacija čišćenja je ključna za farmaceutsku proizvodnju jer sprečava unakrsnu kontaminaciju.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#586F7C] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Definisanje zadatka čišćenja</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#586F7C] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Evaluacija optimalnog postupka</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#586F7C] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Provera performansi</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#586F7C] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">deconex® CIP proizvodi</span>
                  </div>
                </div>
              </div>

              {/* Profesionalno čišćenje laboratorijskog posuđa */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="mb-6">
                  <div className="text-4xl font-extralight text-gray-900 mb-4">LAB</div>
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-3 leading-tight">
                    Čišćenje laboratorijskog<br />
                    posuđa
                  </h3>
                  <p className="text-gray-600 font-light text-xs leading-relaxed mb-6">
                    deconex proizvodi razvijeni su posebno za laboratorije i obezbeđuju staklo bez ostataka i pouzdane analitičke rezultate.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Visoka efikasnost i ekonomičnost</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Bez fosfata i surfaktanata</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">Izuzetna ispirljivost</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#2F4550] rounded-full"></div>
                    <span className="text-gray-700 font-light text-xs">deconex® proizvodi</span>
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
                <span className="font-normal">farmaceutske standarde</span>
              </h2>
              <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Naša misija je da obezbedimo proizvode zasnovane na naučno potvrđenim tehnologijama, koji ispunjavaju najviše standarde kvaliteta, bezbednosti i efikasnosti. Fokusirani smo na uvoz i distribuciju inovativnih rešenja koja unapređuju higijenske protokole i podržavaju očuvanje zdravlja u profesionalnim okruženjima. Težimo da budemo pouzdan partner zdravstvenim i industrijskim institucijama, nudeći rešenja koja spajaju vrhunsku tehnologiju, održivost i odgovornost prema korisnicima i društvu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">20</div>
                <p className="text-gray-600 font-light text-sm mb-2">Godina Iskustva</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">100+</div>
                <p className="text-gray-600 font-light text-sm mb-2">Farmaceutskih Proizvoda</p>
                <div className="w-16 h-1 bg-[#586F7C] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">50+</div>
                <p className="text-gray-600 font-light text-sm mb-2">Uspešnih Partnerstava</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">GMP</div>
                <p className="text-gray-600 font-light">Sertifikovani Standardi</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#586F7C] to-[#2F4550] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">ISO 13485</div>
                <p className="text-gray-600 font-light">Međunarodna Sertifikacija</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
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
                Potrebne su Vam Farmaceutske Sirovine?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-white/90 font-light leading-relaxed">
                Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo u oblasti farmaceutskih proizvoda i tehnologija
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

export default FarmakoIndustrija;