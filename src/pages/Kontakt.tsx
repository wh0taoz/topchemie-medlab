import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Kontakt: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate EmailJS credentials
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS credentials are not configured properly.');
      }

      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Nije navedeno',
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage(
        error.text || 'Došlo je do greške pri slanju poruke. Molimo pokušajte ponovo.'
      );

      // Auto-hide error message after 7 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 pt-24 sm:pt-28 lg:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">Kontakt</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-light px-4 sm:px-0">
            Kontaktirajte nas za sve informacije o našim proizvodima i uslugama.
            Tu smo da odgovorimo na sva vaša pitanja.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Telefon</div>
                <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                  <Phone className="h-4 w-4" />
                  <span>Kontakt</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Pozovite nas direktno
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed space-y-1">
                <p>+381 11 123 4567</p>
                <p>+381 11 123 4568</p>
                <p>Pon-Pet: 08:00 - 16:00</p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Email</div>
                <div className="flex items-center gap-2 bg-[#586F7C]/10 text-[#586F7C] px-3 py-1 rounded-full text-sm">
                  <Mail className="h-4 w-4" />
                  <span>Poruke</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Pošaljite nam poruku
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed space-y-1">
                <p>info@topchemie-medlab.com</p>
                <p>sales@topchemie-medlab.com</p>
                <p>support@topchemie-medlab.com</p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">Adresa</div>
                <div className="flex items-center gap-2 bg-[#2F4550]/10 text-[#2F4550] px-3 py-1 rounded-full text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Lokacija</span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Posetite našu kancelariju
              </h3>
              <div className="text-gray-600 font-light text-sm leading-relaxed space-y-1">
                <p>Bulevar Oslobođenja 123</p>
                <p>11000 Beograd</p>
                <p>Srbija</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 pb-4 sm:pb-6">
            <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900 tracking-tight">Pošaljite Poruku</h2>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3 animate-fadeIn">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-900 mb-1">Poruka uspešno poslata!</h3>
                  <p className="text-sm text-green-700">
                    Vaša poruka je uspešno dostavljena. Odgovorićemo vam u najkraćem mogućem roku.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-900 mb-1">Greška pri slanju</h3>
                  <p className="text-sm text-red-700">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light resize-none"
                  placeholder="Opišite vaše pitanje ili potrebe..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Šaljem poruku...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Pošaljite Poruku
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-gray-900 tracking-tight">Radno Vreme</h2>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Kancelarija</h3>
                </div>
                <div className="space-y-3 text-gray-600 font-light">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span>Ponedeljak - Petak:</span>
                    <span className="font-medium">08:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span>Subota:</span>
                    <span className="font-medium">Po dogovoru</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Nedelja:</span>
                    <span className="font-medium text-red-500">Zatvoreno</span>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-medium mb-4 text-gray-900">Kako do Nas</h3>
                <p className="text-gray-600 font-light mb-4 text-sm leading-relaxed">
                  Nalazimo se u centru Beograda, blizu glavnog autobuskog stajališta.
                  Dostupan je parking za posetioce.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>Bus linije: 2, 5, 7, 9</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>Parking: Besplatan za klijente</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>Metro: Stanica Vukov spomenik (500m)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;