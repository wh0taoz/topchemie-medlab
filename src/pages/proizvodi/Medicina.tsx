import React from 'react';
import { TestTube, Heart, Shield, Award } from 'lucide-react';

const Medicina: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <TestTube className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Medicina</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nudimo širok spektar medicinskih proizvoda i opreme za zdravstvene ustanove,
            ordinacije i laboratorije.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Heart className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Dijagnostička Oprema</h3>
            <p className="text-gray-600">
              Najsavremenija dijagnostička oprema za precizne analize i brze rezultate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Shield className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Zaštitna Oprema</h3>
            <p className="text-gray-600">
              Visokokvalitetna zaštitna oprema za bezbednost zdravstvenog osoblja.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Award className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sertifikovani Proizvodi</h3>
            <p className="text-gray-600">
              Svi proizvodi su sertifikovani i u skladu sa najstrožim međunarodnim standardima.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Naši Proizvodi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Laboratorijska Oprema</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Mikroskopi i optička oprema</li>
                <li>Centrifuge i inkubatori</li>
                <li>Analizatori i spektrofotometri</li>
                <li>Pipete i laboratorijski pribor</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Medicinska Oprema</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Monitoring oprema</li>
                <li>Sterilizatori i autoklave</li>
                <li>Respiratori i ventilatori</li>
                <li>Hirurški instrumenti</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kontaktirajte Nas</h2>
          <p className="text-gray-600 mb-6">
            Za detaljne informacije o našim medicinskim proizvodima i uslugama,
            slobodno nas kontaktirajte.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kontaktiraj Nas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Medicina;