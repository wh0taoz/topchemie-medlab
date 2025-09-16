import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Kontakt: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kontaktirajte nas za sve informacije o našim proizvodima i uslugama.
            Tu smo da odgovorimo na sva vaša pitanja.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Telefon</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>+381 11 123 4567</p>
              <p>+381 11 123 4568</p>
              <p className="text-sm">Pon-Pet: 08:00 - 16:00</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <Mail className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>info@topchemie-medlab.com</p>
              <p>sales@topchemie-medlab.com</p>
              <p>support@topchemie-medlab.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Adresa</h3>
            </div>
            <div className="text-gray-600">
              <p>Bulevar Oslobođenja 123</p>
              <p>11000 Beograd</p>
              <p>Srbija</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Pošaljite Poruku</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ime i Prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Adresa *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Kompanija/Organizacija
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Tema Poruke *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Izaberite temu</option>
                  <option value="medicina">Medicinski proizvodi</option>
                  <option value="farmako">Farmako industrija</option>
                  <option value="ekocert">Ekocert deterdženti</option>
                  <option value="sajmovi">Sajmovi i kongresi</option>
                  <option value="podrska">Tehnička podrška</option>
                  <option value="ostalo">Ostalo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Opišite vaše pitanje ili potrebe..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Pošaljite Poruku
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Radno Vreme</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Kancelarija</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Ponedeljak - Petak:</span>
                  <span>08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Subota:</span>
                  <span>Po dogovoru</span>
                </div>
                <div className="flex justify-between">
                  <span>Nedelja:</span>
                  <span>Zatvoreno</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Hitna Podrška</h3>
              <p className="text-gray-600 mb-3">
                Za hitne slučajeve i tehničku podršku dostupni smo 24/7:
              </p>
              <p className="text-blue-600 font-semibold">+381 11 123 4599</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Kako do Nas</h3>
              <p className="text-gray-600 mb-3">
                Nalazimo se u centru Beograda, blizu glavnog autobuskog stajališta.
                Dostupan je parking za posetioce.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bus linije: 2, 5, 7, 9</li>
                <li>• Parking: Besplatan za klijente</li>
                <li>• Metro: Stanica Vukov spomenik (500m)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;