import React from 'react';
import { TestTube, Heart, Shield, Award, Microscope, Activity, Stethoscope } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Medicina: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#2F4550] to-[#586F7C] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <TestTube className="h-12 w-12 text-white" />
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Dijagnostička Oprema</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Najsavremenija dijagnostička oprema za precizne analize i brze rezultate
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#586F7C] to-gray-700 rounded-2xl flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Zaštitna Oprema</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Visokokvalitetna zaštitna oprema za bezbednost zdravstvenog osoblja
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Sertifikovani Proizvodi</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Svi proizvodi su sertifikovani i u skladu sa najstrožim međunarodnim standardima
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6 text-gray-900 tracking-tight">Naši Proizvodi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                Kompletna ponuda medicinske opreme i instrumenata za sve vrste zdravstvenih ustanova
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gray-50/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center mr-4">
                      <Microscope className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900">Laboratorijska Oprema</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Mikroskopi i optička oprema</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Centrifuge i inkubatori</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-gray-700 font-light">Analizatori i spektrofotometri</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700 font-light">Pipete i laboratorijski pribor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#586F7C] to-gray-700 rounded-2xl flex items-center justify-center mr-4">
                      <Stethoscope className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900">Medicinska Oprema</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-[#2F4550] rounded-full"></div>
                      <span className="text-gray-700 font-light">Monitoring oprema</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-[#586F7C] rounded-full"></div>
                      <span className="text-gray-700 font-light">Sterilizatori i autoklave</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                      <span className="text-gray-700 font-light">Respiratori i ventilatori</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700 font-light">Hirurški instrumenti</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="bg-gradient-to-br from-[#2F4550] to-[#586F7C] text-white border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Activity className="h-12 w-12 mx-auto mb-4 text-white/80" />
                  <div className="text-3xl font-light mb-2">99.8%</div>
                  <p className="text-white/80 font-light">Pouzdanost opreme</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#586F7C] to-gray-700 text-white border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-white/80" />
                  <div className="text-3xl font-light mb-2">ISO 13485</div>
                  <p className="text-white/80 font-light">Sertifikacija</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-700 to-gray-900 text-white border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-white/80" />
                  <div className="text-3xl font-light mb-2">24/7</div>
                  <p className="text-white/80 font-light">Tehnička podrška</p>
                </CardContent>
              </Card>
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