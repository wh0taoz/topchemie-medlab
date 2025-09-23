import React from 'react';
import { TestTube, Heart, Shield, Award, Microscope, Activity, Stethoscope, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Medicina: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden" style={{
        backgroundImage: "url('/vials.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F4550]/30 via-transparent to-[#586F7C]/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <TestTube className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-light mb-6 tracking-tight">Medicina</h1>
              <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
                Nudimo širok spektar medicinskih proizvoda i opreme za zdravstvene ustanove,
                ordinacije i laboratorije
              </p>
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
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">01</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Oprema</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Dijagnostička<br />
                    Oprema
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Najsavremenija dijagnostička oprema za precizne analize i brze rezultate u svim medicinskim ustanovama.
                  </p>
                </div>
              </div>

              {/* 02 - Zaštitna Oprema */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">02</div>
                    <div className="flex items-center gap-2 bg-[#586F7C]/10 text-[#586F7C] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Sigurnost</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Zaštitna<br />
                    Oprema
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Visokokvalitetna zaštitna oprema za maksimalnu bezbednost zdravstvenog osoblja.
                  </p>
                </div>
              </div>

              {/* 03 - Sertifikovani Proizvodi */}
              <div className="group">
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-8xl font-light text-gray-900">03</div>
                    <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Standard</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    Sertifikovani<br />
                    Proizvodi
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Svi proizvodi su sertifikovani i u skladu sa najstrožim međunarodnim standardima kvaliteta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gray-50">
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
                Kompletna ponuda medicinske opreme i instrumenata za sve vrste zdravstvenih ustanova.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-light text-gray-900 mb-2">Laboratorijska Oprema</h3>
                    <p className="text-gray-600 font-light text-sm">Preciznost i pouzdanost</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Mikroskopi i optička oprema</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Centrifuge i inkubatori</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Analizatori i spektrofotometri</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Pipete i laboratorijski pribor</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-light text-gray-900 mb-2">Medicinska Oprema</h3>
                    <p className="text-gray-600 font-light text-sm">Sigurnost i efikasnost</p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#586F7C] to-[#2F4550] rounded-2xl flex items-center justify-center">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Monitoring oprema</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Sterilizatori i autoklave</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Respiratori i ventilatori</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Hirurški instrumenti</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
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
                Naša misija je da otkrijemo<br />
                <span className="font-normal">složenost vaše medicinske opreme</span>
              </h2>
              <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
                Pružamo vam najdetaljnije dijagnostičke uvide kroz preciznu medicinsku opremu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">15</div>
                <p className="text-gray-600 font-light text-sm mb-2">Godina Iskustva</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">50+</div>
                <p className="text-gray-600 font-light text-sm mb-2">Zemalja u Službi</p>
                <div className="w-16 h-1 bg-[#586F7C] mx-auto rounded-full"></div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-light text-gray-900 mb-4">201</div>
                <p className="text-gray-600 font-light text-sm mb-2">Uspešnih Projekata</p>
                <div className="w-16 h-1 bg-[#2F4550] mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-light mb-2 text-gray-900">99.8%</div>
                <p className="text-gray-600 font-light">Pouzdanost Opreme</p>
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
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-[#2F4550] to-[#586F7C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-4xl font-light mb-6 tracking-tight">Trebate Medicinsku Opremu?</h2>
              <p className="text-xl mb-8 text-white/90 font-light">
                Za detaljne informacije o našim medicinskim proizvodima i uslugama,
                slobodno nas kontaktirajte
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-md text-white font-medium rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
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