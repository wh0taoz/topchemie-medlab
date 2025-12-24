import React from 'react';
import { TestTube, FlaskConical, Microscope, Award, Users, Shield, Calendar, Globe, CheckCircle, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
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
        className="relative min-h-[80vh] sm:min-h-screen text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[80vh] sm:min-h-screen py-8 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-16 items-center w-full max-w-7xl mx-auto">
            <motion.div
              className="order-2 lg:order-1 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Topchemie Medlab
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Vaš pouzdani partner za medicinske ustanove, laboratorije, farmaceutsku i kozmetičku proizvodnju
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
                  href="/proizvodi/medicina"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  Pogledajte Proizvode
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                >
                  Kontaktirajte Nas
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-3xl">
                <motion.img
                  src="/ikonica-hero-section.png"
                  alt="Medical Vials"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                {/* Blood Status - Left */}
                <motion.div
                  className="absolute top-2 sm:top-4 lg:top-8 left-2 sm:left-4 lg:left-8 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20 min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs lg:text-sm font-medium">Blood Status</span>
                  </div>
                  <div className="mt-1 sm:mt-2">
                    <div className="flex items-center gap-0.5 sm:gap-1 lg:gap-2">
                      <div className="w-4 sm:w-6 lg:w-8 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-3 sm:w-4 lg:w-6 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-5 sm:w-8 lg:w-10 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                      <div className="w-2 sm:w-3 lg:w-4 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                    </div>
                  </div>
                </motion.div>
                {/* Blood Count - Right */}
                <motion.div
                  className="absolute bottom-2 sm:bottom-4 lg:bottom-8 right-2 sm:right-4 lg:right-8 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/20 min-w-[90px] sm:min-w-[120px] lg:min-w-[140px]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-red-400 rounded-full"></div>
                    <span className="text-[10px] sm:text-xs lg:text-sm font-medium">Blood Count</span>
                  </div>
                  <div className="mt-1 sm:mt-2">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">80</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-white/70 ml-1">bpm</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
              Naši Proizvodi
              <div className="w-24 h-0.5 bg-[#2563eb] mx-auto mt-4"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light px-4 sm:px-0">
              Nudimo širok spektar visokokvalitetnih proizvoda za medicinu farmaceutsku industriju i laboratorije
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <ProductCard
              title="Medicina"
              subtitle="Medlab"
              description="Medicinski proizvodi i oprema za zdravstvene ustanove"
              cardNumber="01"
              href="/proizvodi/medicina"
            />

            <ProductCard
              title="Farmaceutska Industrija i Laboratorije"
              subtitle="Farmacija"
              description="Proizvodi za farmaceutsku industriju"
              cardNumber="02"
              href="/proizvodi/farmako-industrija"
            />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
              {/* Main content with text and stats */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
                    O Nama
                    <div className="w-24 h-0.5 bg-[#2563eb] mt-4"></div>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 font-light leading-relaxed">
                    TOPCHEMIE MEDLAB d.o.o. osnovan je 2005. godine kao specijalizovana kompanija za distribuciju medicinskih sredstava, proizvoda za farmaceutsku industriju i zaštitne opreme.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 font-light leading-relaxed">
                    Kao autorizovani zastupnik firme BORER chemie AG za Srbiju i zemlje u regionu, naše poslovanje obuhvata zastupanje i promociju proizvodnog programa međunarodnih partnera, kao i uvoz i distribuciju njihovih visokokvalitetnih proizvoda.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 font-light leading-relaxed">
                    Naša misija je da postanemo i ostanemo vodeće preduzeće na tržištu u pogledu kvaliteta usluge i proizvoda koji su predmet prodaje medicinskih sredstava.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <StatsCard
                    value="2005"
                    label="Godina osnivanja"
                    gradient="blue"
                  />
                  <StatsCard
                    value="6+"
                    label="Srbija i zemlje u regionu"
                    gradient="gray"
                  />
                  <StatsCard
                    value="200+"
                    label="Zadovoljnih klijenata"
                    gradient="light"
                  />
                  <StatsCard
                    value="24/7"
                    label="Podrška"
                    gradient="dark"
                  />
                </div>
              </div>

              {/* Horizontal feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb]/10 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-[#2563eb]" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">Osnovan 2005. godine</h4>
                  <p className="text-gray-600 font-light text-xs sm:text-sm text-center leading-relaxed">
                    Dugogodišnje iskustvo u oblasti medicinskih sredstava
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb]/10 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-[#2563eb]" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">Autorizovani zastupnik</h4>
                  <p className="text-gray-600 font-light text-xs sm:text-sm text-center leading-relaxed">
                    BORER chemie AG za Srbiju i zemlje u regionu
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb]/10 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#2563eb]" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">Politika kvaliteta</h4>
                  <p className="text-gray-600 font-light text-xs sm:text-sm text-center leading-relaxed">
                    Ispunjavanje zahteva korisnika i važećih propisa
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2563eb]/10 rounded-xl mb-3 sm:mb-4 mx-auto">
                    <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#2563eb]" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">Klijenti</h4>
                  <p className="text-gray-600 font-light text-xs sm:text-sm text-center leading-relaxed">
                    Klinički centri, opšte bolnice, privatne ordinacije i apoteke
                  </p>
                </div>
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
                Spremni za Saradnju?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 text-white/90 font-light leading-relaxed">
                Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo da postignete efikasna, bezbedna i ekonomična rešenja
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

export default ONama;