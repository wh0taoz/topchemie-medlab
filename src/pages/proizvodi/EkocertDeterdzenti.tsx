import React from 'react';
import { Microscope, Leaf, Droplets, Recycle } from 'lucide-react';

const EkocertDeterdzenti: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Microscope className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Ekocert Deterdženti</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ekološki sertifikovani deterdženti i sredstva za čišćenje koja štite
            zdravlje i životnu sredinu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Leaf className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">100% Prirodno</h3>
            <p className="text-gray-600">
              Proizvodi napravljeni od prirodnih sirovina bez štetnih hemikalija.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Droplets className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Biorazgradivo</h3>
            <p className="text-gray-600">
              Svi proizvodi su potpuno biorazgradivi i bezbedni za životnu sredinu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <Recycle className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Održivo Pakovanje</h3>
            <p className="text-gray-600">
              Koristi se reciklažno i održivo pakovanje za smanjenje ekološkog otiska.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ecocert Sertifikacija</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Ecocert je međunarodno priznat organ za sertifikaciju koji garantuje
                da naši proizvodi ispunjavaju najstrože ekološke standarde.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Minimalno 95% prirodnih sirovina</li>
                <li>Maksimalno 5% sintetičkih komponenti</li>
                <li>Zabrana štetnih hemikalija</li>
                <li>Održiva proizvodnja</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Benefiti</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Bezbednost za korisnike</li>
                <li>Zaštita životne sredine</li>
                <li>Visoka efikasnost čišćenja</li>
                <li>Prihvatljivost za osetljivu kožu</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Deterdženti za Veš</h3>
            <p className="text-gray-600 text-sm">
              Ekološki deterdženti za belo i obojeno veš
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Sredstva za Sudove</h3>
            <p className="text-gray-600 text-sm">
              Prirodna sredstva za pranje sudova
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Univerzalni Čistači</h3>
            <p className="text-gray-600 text-sm">
              Višenamenski čistači za sve površine
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Specijalizovani Proizvodi</h3>
            <p className="text-gray-600 text-sm">
              Čistači za staklo, podove i sanitarije
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Zašto Izabrati Ekocert Proizvode?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Za Vaše Zdravlje</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Bez alergena i iritanata</li>
                <li>Bezbedni za decu</li>
                <li>Prihvatljivi za astmatičare</li>
                <li>Dermatološki testirani</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Za Životnu Sredinu</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Smanjeno zagađenje voda</li>
                <li>Manja emisija CO2</li>
                <li>Zaštita biodiverziteta</li>
                <li>Održiva proizvodnja</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Budite Deo Zelene Promene</h2>
          <p className="text-gray-600 mb-6">
            Izaberite ekološki odgovorne proizvode i doprinesite očuvanju naše planete
            za buduće generacije.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Saznajte Više
          </a>
        </div>
      </div>
    </div>
  );
};

export default EkocertDeterdzenti;