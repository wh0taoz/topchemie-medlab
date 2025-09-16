import React from 'react';
import { FlaskConical, Atom, Factory, Beaker } from 'lucide-react';

const FarmakoIndustrija: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FlaskConical className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Farmako Industrija</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specijalizovani smo za snabdevanje farmaceutske industrije sa
            visokokvalitetnim sirovinama, oprenom i tehnologijama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Atom className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Aktivne Supstance</h3>
            <p className="text-gray-600">
              Visokokvalitetne aktivne farmaceutske supstance (API) od renomiranih proizvođača.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Factory className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Proizvodna Oprema</h3>
            <p className="text-gray-600">
              Najsavremenija oprema za proizvodnju farmaceutskih preparata.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Beaker className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Pomoćne Supstance</h3>
            <p className="text-gray-600">
              Širok spektar ekscipijenasa i pomoćnih supstanci za farmaceutsku proizvodnju.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Naša Ponuda</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sirovine i Supstance</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Aktivne farmaceutske supstance (API)</li>
                <li>Ekscipijensi i stabilizatori</li>
                <li>Konzervansi i antioksidansi</li>
                <li>Arome i boje za farmaceutske preparate</li>
                <li>Rastvarači i nosači</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Oprema i Tehnologija</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Tabletirke i kapsulatori</li>
                <li>Mešalice i granulatori</li>
                <li>Sušnice i sterilizatori</li>
                <li>Pakovanje i označavanje</li>
                <li>Kontrola kvaliteta oprema</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Standardi Kvaliteta</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">GMP</div>
              <p className="text-gray-600">Good Manufacturing Practice sertifikacija</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">ISO</div>
              <p className="text-gray-600">ISO 9001 i ISO 13485 standardi</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">FDA</div>
              <p className="text-gray-600">FDA odobreni proizvodi i procesi</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Partneri u Inovaciji</h2>
          <p className="text-gray-600 mb-6">
            Radimo sa vodećim farmaceutskim kompanijama u razvoju i proizvodnji
            inovativnih lekova i medicinskih proizvoda.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Postanite Naš Partner
          </a>
        </div>
      </div>
    </div>
  );
};

export default FarmakoIndustrija;