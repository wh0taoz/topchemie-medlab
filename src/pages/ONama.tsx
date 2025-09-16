import React from 'react';
import { TestTube, FlaskConical, Microscope, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ONama: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#2F4550] to-[#586F7C] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-6xl font-light mb-6 tracking-tight">Topchemie Medlab</h1>
              <p className="text-xl mb-8 text-white/90 font-light">
                Vaš pouzdani partner u oblasti medicinske opreme, farmaceutskih proizvoda
                i ekološki sertifikovanih deterdženata
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/proizvodi/medicina"
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-md text-white font-medium rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                >
                  Pogledajte Proizvode
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 bg-[#2F4550] text-white font-medium rounded-2xl hover:bg-[#586F7C] transition-all duration-300 shadow-lg border border-white/20"
                >
                  Kontaktirajte Nas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 text-gray-900 tracking-tight">Naši Proizvodi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Nudimo širok spektar visokokvalitetnih proizvoda za medicinu, farmaciju i ekologiju
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TestTube className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Medicina</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Medicinski proizvodi i oprema za zdravstvene ustanove
                </p>
                <a
                  href="/proizvodi/medicina"
                  className="inline-flex items-center text-[#2F4550] hover:text-[#586F7C] font-medium transition-colors duration-300"
                >
                  Saznajte više →
                </a>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#586F7C] to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FlaskConical className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Farmako Industrija</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Proizvodi za farmaceutsku industriju
                </p>
                <a
                  href="/proizvodi/farmako-industrija"
                  className="inline-flex items-center text-[#2F4550] hover:text-[#586F7C] font-medium transition-colors duration-300"
                >
                  Saznajte više →
                </a>
              </CardContent>
            </Card>

            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Microscope className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-4 text-gray-900">Ekocert Deterdženti</h3>
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  Ekološki sertifikovani deterdženti i sredstva za čišćenje
                </p>
                <a
                  href="/proizvodi/ekocert-deterdzenti"
                  className="inline-flex items-center text-[#2F4550] hover:text-[#586F7C] font-medium transition-colors duration-300"
                >
                  Saznajte više →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-light mb-6 text-gray-900 tracking-tight">O Nama</h2>
                  <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                    Topchemie Medlab je vodeća kompanija u distribuciji medicinskih proizvoda,
                    farmaceutskih preparata i ekološki sertifikovanih deterdženata.
                  </p>
                  <p className="text-gray-600 mb-8 font-light leading-relaxed">
                    Sa dugogodišnjim iskustvom i stručnim timom, pružamo vrhunske proizvode
                    i usluge našim klijentima u celom regionu.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Sertifikovani proizvodi</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#586F7C] to-gray-700 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Stručan tim</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Garancija kvaliteta</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-xl flex items-center justify-center">
                      <TestTube className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">Najnovije tehnologije</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#2F4550] to-[#586F7C] text-white border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light mb-2">15+</div>
                    <p className="text-white/80 font-light">Godina iskustva</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-[#586F7C] to-gray-700 text-white border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light mb-2">500+</div>
                    <p className="text-white/80 font-light">Zadovoljnih klijenata</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-700 to-gray-900 text-white border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light mb-2">1000+</div>
                    <p className="text-white/80 font-light">Proizvoda u ponudi</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gray-800 to-black text-white border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-light mb-2">24/7</div>
                    <p className="text-white/80 font-light">Podrška</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-16 text-gray-900 tracking-tight">Naše Vrednosti</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#2F4550] to-[#586F7C] rounded-2xl flex items-center justify-center">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Kvalitet</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Najviši standardi kvaliteta u svim našim proizvodima i uslugama
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#586F7C] to-gray-700 rounded-2xl flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Pouzdanost</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Dugogodišnje partnerstvo zasnovano na poverenju i profesionalnosti
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Inovacije</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Kontinuirani razvoj i unapređenje kroz najnovije tehnologije
                  </p>
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
              <h2 className="text-4xl font-light mb-6 tracking-tight">Spremni za Saradnju?</h2>
              <p className="text-xl mb-8 text-white/90 font-light">
                Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo
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

export default ONama;