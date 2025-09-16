import React from 'react';
import { TestTube, FlaskConical, Microscope, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCard } from '@/components/ui/product-card';
import { StatsCard } from '@/components/ui/stats-card';
import { FeatureBadge } from '@/components/ui/feature-badge';
import { ValuesCard } from '@/components/ui/values-card';

const ONama: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center w-full max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Topchemie Medlab
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 font-light leading-relaxed">
                Vaš pouzdani partner u oblasti medicinske opreme, farmaceutskih proizvoda
                i ekološki sertifikovanih deterdženata
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/proizvodi/medicina"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  Pogledajte Proizvode
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Kontaktirajte Nas
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-2xl xl:max-w-3xl">
                <img
                  src="/ikonica-hero-section.png"
                  alt="Medical Vials"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                {/* Blood Status - Left */}
                <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-white/10 backdrop-blur-md rounded-2xl p-3 lg:p-4 border border-white/20 min-w-[140px] lg:min-w-[160px]">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-xs lg:text-sm font-medium">Blood Status</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-1 lg:gap-2">
                      <div className="w-6 lg:w-8 h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-4 lg:w-6 h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-8 lg:w-10 h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-3 lg:w-4 h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Blood Count - Right */}
                <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white/10 backdrop-blur-md rounded-2xl p-3 lg:p-4 border border-white/20 min-w-[120px] lg:min-w-[140px]">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                    <span className="text-xs lg:text-sm font-medium">Blood Count</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xl lg:text-2xl font-bold">80</span>
                    <span className="text-xs lg:text-sm text-white/70 ml-1">bpm</span>
                  </div>
                </div>
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
            <ProductCard
              title="Medicina"
              subtitle="Topchemie Medlab"
              description="Medicinski proizvodi i oprema za zdravstvene ustanove"
              icon={<TestTube className="h-6 w-6 text-white" />}
              gradient="blue"
              href="/proizvodi/medicina"
            />

            <ProductCard
              title="Farmako Industrija"
              subtitle="Professional Solutions"
              description="Proizvodi za farmaceutsku industriju"
              icon={<FlaskConical className="h-6 w-6 text-white" />}
              gradient="gray"
              href="/proizvodi/farmako-industrija"
            />

            <ProductCard
              title="Ekocert Deterdženti"
              subtitle="Eco-Friendly Solutions"
              description="Ekološki sertifikovani deterdženti i sredstva za čišćenje"
              icon={<Microscope className="h-6 w-6 text-white" />}
              gradient="dark"
              href="/proizvodi/ekocert-deterdzenti"
            />
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
                  <FeatureBadge
                    icon={<Award className="h-6 w-6" />}
                    text="Sertifikovani proizvodi"
                    gradient="blue"
                  />
                  <FeatureBadge
                    icon={<Users className="h-6 w-6" />}
                    text="Stručan tim"
                    gradient="gray"
                  />
                  <FeatureBadge
                    icon={<Shield className="h-6 w-6" />}
                    text="Garancija kvaliteta"
                    gradient="light"
                  />
                  <FeatureBadge
                    icon={<TestTube className="h-6 w-6" />}
                    text="Najnovije tehnologije"
                    gradient="dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <StatsCard
                  value="15+"
                  label="Godina iskustva"
                  gradient="blue"
                />
                <StatsCard
                  value="500+"
                  label="Zadovoljnih klijenata"
                  gradient="gray"
                />
                <StatsCard
                  value="1000+"
                  label="Proizvoda u ponudi"
                  gradient="light"
                />
                <StatsCard
                  value="24/7"
                  label="Podrška"
                  gradient="dark"
                />
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
              <ValuesCard
                title="Kvalitet"
                description="Najviši standardi kvaliteta u svim našim proizvodima i uslugama"
                icon={<Shield className="h-10 w-10" />}
                gradient="blue"
              />

              <ValuesCard
                title="Pouzdanost"
                description="Dugogodišnje partnerstvo zasnovano na poverenju i profesionalnosti"
                icon={<Users className="h-10 w-10" />}
                gradient="gray"
              />

              <ValuesCard
                title="Inovacije"
                description="Kontinuirani razvoj i unapređenje kroz najnovije tehnologije"
                icon={<Award className="h-10 w-10" />}
                gradient="dark"
              />
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