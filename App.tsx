import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail, User, BookOpen, Heart, ArrowRight, MessageCircle } from 'lucide-react';
import { GeminiImage } from './components/GeminiImage';
import { DonationModal } from './components/DonationModal';
import { OfficeBearer, Program, ContactFormState } from './types';

// --- Constants & Data ---
const WHATSAPP_NUMBER = "917978796166"; // Clean format for API
const DISPLAY_PHONE = "+91 7978796166";

const OFFICE_BEARERS: OfficeBearer[] = [
  { name: "Md Gulam Jilani Khan", role: "Secretary" },
  { name: "Md Gulam Subhani Khan", role: "Treasurer" },
  { name: "Md Raza Khan", role: "Board Member" },
  { name: "Anamul Khan", role: "Board Member" },
  { name: "Abdul Jabbar Khan", role: "Board Member" },
];

const PROGRAMS: Program[] = [
  {
    title: "Early Childhood",
    ageGroup: "3-6 yrs",
    description: "Building strong foundations with basic alphabets, social skills, and moral values in a nurturing environment.",
    imagePrompt: "Happy muslim little girls 4 years old learning alphabets in a colorful classroom, joyful, bright lighting, hijab"
  },
  {
    title: "Primary Level",
    ageGroup: "6-12 yrs",
    description: "Comprehensive curriculum covering Math, Science, and Islamic Studies to develop well-rounded personalities.",
    imagePrompt: "Muslim girls in school uniform studying science in a laboratory, holding test tubes, curious faces, modern education"
  },
  {
    title: "Senior Education",
    description: "Focusing on vocational training and digital literacy to prepare young women for the modern workforce.",
    imagePrompt: "Young muslim women working on computers in a modern digital library, focused, professional, headscarves"
  },
  {
    title: "Special Programs",
    description: "Empowering initiatives focused on women's leadership, community health, and social responsibility.",
    imagePrompt: "Muslim women sitting in a circle discussing community leadership, outdoor garden setting, sunlight, empowering atmosphere"
  }
];

const SECTORS = [
  "Education & Literacy", "Child Development", "Women Empowerment", 
  "Health & Wellness", "Poverty Alleviation", "Skill Development"
];

// --- Main Component ---
const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormState>({ name: '', email: '', message: '' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Contact Inquiry*\n\n*Name:* ${contactForm.name}\n*Email:* ${contactForm.email}\n*Message:* ${contactForm.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setContactForm({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      
      {/* --- Navbar --- */}
      <nav className="fixed w-full z-40 top-0 left-0 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
             <img src="/logo.svg" alt="Fatima Tuz Zahra logo" className="w-10 h-10 rounded-full border-2 border-amber-500 object-cover bg-emerald-700" />
             <div className="leading-tight">
               <h1 className="font-serif font-bold text-emerald-900 text-lg md:text-xl tracking-tight">Fatima Tuz Zahra</h1>
               <p className="text-xs text-amber-600 font-semibold tracking-wide">EDUCATION & SOCIAL TRUST</p>
             </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Home</a>
            <a href="#about" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">About</a>
            <a href="#programs" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Programs</a>
            <a href="#contact" className="text-slate-600 hover:text-emerald-700 font-medium transition-colors">Contact</a>
            <button 
              onClick={() => setIsDonationOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-amber-200 transition-transform hover:-translate-y-0.5"
            >
              Donation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
            <div className="flex flex-col p-6 space-y-4">
              <a href="#home" onClick={toggleMenu} className="text-lg font-medium text-slate-700">Home</a>
              <a href="#about" onClick={toggleMenu} className="text-lg font-medium text-slate-700">About</a>
              <a href="#programs" onClick={toggleMenu} className="text-lg font-medium text-slate-700">Programs</a>
              <a href="#contact" onClick={toggleMenu} className="text-lg font-medium text-slate-700">Contact</a>
              <button 
                 onClick={() => { setIsDonationOpen(true); toggleMenu(); }}
                 className="bg-amber-600 text-white py-3 rounded-lg font-bold w-full"
              >
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-20 md:pt-0 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image using AI */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/70 z-10"></div>
          {/* <GeminiImage 
            prompt="Cinematic wide shot of a beautiful modern islamic school building for girls, golden hour, architecture, peaceful garden, high resolution" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            fallbackSrc="https://picsum.photos/1920/1080?blur=2"
          /> */}
          <img 
            src="/logo1.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center text-white">
          <div className="inline-block px-4 py-1.5 mb-6 border border-amber-400/50 rounded-full bg-amber-500/20 backdrop-blur-sm text-amber-300 font-semibold tracking-wider text-sm">
             REGISTERED NO: 40392307579
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-md">
            Empowering Through <br/> <span className="text-amber-400">Education & Faith</span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Creating an educated and empowered society through comprehensive educational and social programs for underprivileged communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#programs" className="bg-white text-emerald-800 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
              Our Programs <ArrowRight size={20} />
            </a>
            <button onClick={() => setIsDonationOpen(true)} className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
              Support Us <Heart size={20} className="fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h4 className="text-emerald-600 font-bold uppercase tracking-wider mb-2">About The Trust</h4>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Dedicated to Social <span className="text-amber-600">Growth & Literacy</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <span className="font-bold text-slate-800">Fatima Tuz Zahra Education and Social Trust</span> is a beacon of hope, established with the vision of creating an educated society. Registered on 25-09-2023 in Cuttack, Odisha, we are committed to holistic development.
                </p>
                <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-600 my-6">
                   <p className="italic text-emerald-800 font-medium">"Mission: To provide quality education and social development services to underprivileged communities."</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                   {SECTORS.map((sector, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                       <span className="text-sm font-medium">{sector}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* AI Image */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <GeminiImage 
                  prompt="A heartwarming photo of an indian muslim female teacher helping a young girl read a book, warm sunlight, soft focus background, inspirational" 
                  alt="Education and Charity" 
                  className="w-full aspect-[4/3] object-cover"
                  fallbackSrc="https://picsum.photos/600/500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                   <p className="text-white font-medium">Empowering the next generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Office Bearers --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Office Bearers</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">The dedicated team leading our mission towards a brighter future.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {OFFICE_BEARERS.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <User size={32} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Programs Section --- */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-emerald-600 font-bold uppercase tracking-wider mb-2">Our Curriculum</h4>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Educational Programs</h2>
            </div>
            <p className="hidden md:block text-slate-500 max-w-md text-right">
              From early childhood basics to vocational training, we cover every stage of development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                   {/* <GeminiImage 
                      prompt={program.imagePrompt}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      fallbackSrc={`https://picsum.photos/400/300?random=${idx}`}
                   /> */}
                   <img 
                      src='/image.png' 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                     {program.ageGroup || "All Ages"}
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{program.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {program.description}
                  </p>
                  <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-emerald-900 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-800/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="text-white space-y-8">
              <div>
                <h4 className="text-amber-400 font-bold uppercase tracking-wider mb-2">Get in Touch</h4>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Let's Build a Better Future Together</h2>
                <p className="text-emerald-100 text-lg leading-relaxed">
                  Have questions about our programs or want to volunteer? Reach out to us. We are always here to listen and collaborate.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Visit Us</h5>
                    <p className="text-emerald-100 text-sm leading-relaxed max-w-xs">
                      Khatia No. 1012, Plot No. 188, Mehendipur, Chandini Chowk, Lalbag, Cuttack, Odisha, PIN-753002
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Call / WhatsApp</h5>
                    <p className="text-emerald-100">{DISPLAY_PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <Mail className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">Email Us</h5>
                    <p className="text-emerald-100">fatimatuzzahrasocialtrust@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Full Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="name@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                  Send via WhatsApp <MessageCircle size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
               <h3 className="text-white font-serif font-bold text-xl mb-2">Fatima Tuz Zahra Trust</h3>
               <p className="text-sm">Registration No: 40392307579</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
               <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Fatima Tuz Zahra Education and Social Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- Donation Modal --- */}
      <DonationModal 
        isOpen={isDonationOpen} 
        onClose={() => setIsDonationOpen(false)} 
        whatsappNumber={WHATSAPP_NUMBER}
      />

    </div>
  );
};

export default App;