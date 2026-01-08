
import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import ServiceTag from './components/ServiceTag';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  const services = ["Hardwood", "Laminate", "LVP", "Tile"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a252f] via-[#12181d] to-[#0d1216] px-4 py-12">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="z-10 w-full max-w-2xl text-center space-y-12 animate-fade-in">
        {/* Header Section */}
        <header className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Premium Flooring Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Elite <span className="text-blue-500">NW</span> Flooring
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span>New Website</span>
            <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm md:text-base border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] animate-pulse tracking-widest uppercase">
              Coming Soon
            </span>
          </h2>
        </header>

        {/* Message Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl space-y-8">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            We are currently updating our online experience. 
            <span className="block mt-2 font-normal text-white">We remain fully open for business.</span>
            Please contact us for custom quotes and expert consultation.
          </p>

          {/* Services List */}
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <ServiceTag key={service} label={service} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <ActionButton 
              href="tel:425-555-0199" 
              icon={<Phone className="w-5 h-5" />} 
              label="Call Us" 
              primary 
            />
            <ActionButton 
              href="mailto:quotes@elitenwflooring.com" 
              icon={<Mail className="w-5 h-5" />} 
              label="Email Us" 
            />
          </div>
        </div>

        {/* Footer Section */}
        <footer className="pt-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-500/50" />
              <span>Serving Lynnwood, WA & Greater Seattle</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-slate-800" />
            <div className="flex items-center space-x-2">
              <span className="font-mono bg-slate-800/50 px-3 py-1 rounded border border-slate-700/50">
                License: ELITENF764BT
              </span>
            </div>
          </div>
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Elite Northwest Flooring. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default App;
