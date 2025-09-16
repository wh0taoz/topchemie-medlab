import React from 'react';
import { TestTube, FlaskConical, Microscope, Award, Users, Shield } from 'lucide-react';

const ONama: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Topchemie Medlab</h1>
            <p className="text-xl mb-8">
              Vaš pouzdani partner u oblasti medicinske opreme, farmaceutskih proizvoda
              i ekološki sertifikovanih deterdženata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/proizvodi/medicina"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Pogledajte Proizvode
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Kontaktirajte Nas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Naši Proizvodi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nudimo širok spektar visokokvalitetnih proizvoda za medicinu, farmaciju i ekologiju
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <TestTube className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Medicina</h3>
              <p className="text-gray-600 text-center mb-4">
                Medicinski proizvodi i oprema za zdravstvene ustanove
              </p>
              <div className="text-center">
                <a
                  href="/proizvodi/medicina"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Saznajte više →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <FlaskConical className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Farmako Industrija</h3>
              <p className="text-gray-600 text-center mb-4">
                Proizvodi za farmaceutsku industriju
              </p>
              <div className="text-center">
                <a
                  href="/proizvodi/farmako-industrija"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Saznajte više →
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <Microscope className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Ekocert Deterdženti</h3>
              <p className="text-gray-600 text-center mb-4">
                Ekološki sertifikovani deterdženti i sredstva za čišćenje
              </p>
              <div className="text-center">
                <a
                  href="/proizvodi/ekocert-deterdzenti"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  Saznajte više →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">O Nama</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Topchemie Medlab je vodeća kompanija u distribuciji medicinskih proizvoda,
                  farmaceutskih preparata i ekološki sertifikovanih deterdženata.
                </p>
                <p className="text-gray-600 mb-6">
                  Sa dugogodišnjim iskustvom i stručnim timom, pružamo vrhunske proizvode
                  i usluge našim klijentima u celom regionu.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-700">Sertifikovani proizvodi</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-700">Stručan tim</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-700">Garancija kvaliteta</span>
                  </div>
                  <div className="flex items-center">
                    <TestTube className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-700">Najnovije tehnologije</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <p className="text-gray-600">Godina iskustva</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <p className="text-gray-600">Zadovoljnih klijenata</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <p className="text-gray-600">Proizvoda u ponudi</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-gray-600">Podrška</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">Naše Vrednosti</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Kvalitet</h3>
                <p className="text-gray-600">
                  Najviši standardi kvaliteta u svim našim proizvodima i uslugama
                </p>
              </div>
              <div>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Pouzdanost</h3>
                <p className="text-gray-600">
                  Dugogodišnje partnerstvo zasnovano na poverenju i profesionalnosti
                </p>
              </div>
              <div>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Inovacije</h3>
                <p className="text-gray-600">
                  Kontinuirani razvoj i unapređenje kroz najnovije tehnologije
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Spremni za Saradnju?</h2>
            <p className="text-xl mb-8">
              Kontaktirajte nas danas i saznajte kako možemo da vam pomognemo
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Kontaktirajte Nas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ONama;