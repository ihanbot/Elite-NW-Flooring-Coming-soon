
import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import ServiceTag from './components/ServiceTag';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  const services = ["Hardwood", "Laminate", "LVP", "Tile", "Refinishing"];
  
  /**
   * Giải pháp cho Google Drive trên Vercel/GitHub:
   * Định dạng /lh3.googleusercontent.com/d/ID thường ổn định hơn trên các môi trường production.
   */
  const logoUrl = "https://lh3.googleusercontent.com/d/15MO40LD0F6ttQbjJamb3PrhGnB1LSGVe";

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#f8fafc] px-4 py-6 md:py-16">
      {/* Dynamic Brand Gradients */}
      <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[45%] bg-[#007b22]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#1d3b64]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-20 w-full max-w-5xl text-center space-y-12 md:space-y-16 animate-fade-in">
        
        {/* Superiority Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2.5 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-slate-200 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#007b22]" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#1d3b64]/70">Premium Flooring Craftsmanship</span>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center w-full px-2">
          <div className="relative group w-full max-w-[720px] bg-white p-5 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(29,59,100,0.12)] border border-white transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(29,59,100,0.2)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#007b22] to-transparent opacity-40" />
            
            <img 
              src={logoUrl} 
              alt="Elite Northwest Flooring" 
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              className="w-full h-auto max-h-[160px] md:max-h-[280px] object-contain block mx-auto transition-transform duration-700 group-hover:scale-[1.01]"
              onError={(e) => {
                // Nếu Google chặn ảnh (lỗi 403), hệ thống sẽ tự động chuyển sang Logo chữ để trang web không bị trống
                const target = e.currentTarget;
                const parent = target.parentElement;
                target.style.display = 'none';
                if (parent && !parent.querySelector('.fallback-logo')) {
                  const fallback = document.createElement('div');
                  fallback.className = 'fallback-logo text-center py-8 md:py-12';
                  fallback.innerHTML = `
                    <div class="text-[#1d3b64] font-black text-3xl md:text-5xl tracking-tight leading-none uppercase">ELITE NORTHWEST</div>
                    <div class="flex items-center justify-center mt-3 max-w-xs mx-auto">
                      <div class="h-[2px] bg-[#1d3b64] flex-grow opacity-20"></div>
                      <div class="text-[#1d3b64] font-bold text-lg md:text-2xl px-4 tracking-[0.3em] uppercase">FLOORING</div>
                      <div class="h-[2px] bg-[#1d3b64] flex-grow opacity-20"></div>
                    </div>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>

        {/* COMING SOON Content */}
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3 mb-1">
               <span className="text-[#007b22] font-black text-[10px] md:text-xs uppercase tracking-[0.6em] bg-green-50 px-3 py-1 rounded-md">Launching Soon</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-[#1d3b64] tracking-tight leading-[1.1] uppercase">
              The Northwest's Finest <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007b22] to-[#007b22]/80 italic">Flooring Experience</span>
            </h1>
          </div>
          <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            We are curating a brand new online destination. Our mobile installation teams are active—transforming homes and businesses across Washington with elite precision.
          </p>
        </div>

        {/* Action Center */}
        <div className="bg-white/40 border border-white/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_10px_40px_rgba(29,59,100,0.05)] space-y-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {services.map((service) => (
              <ServiceTag key={service} label={service} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ActionButton 
              href="tel:2069996506" 
              icon={<Phone className="w-4 h-4" />} 
              label="(206) 999-6506" 
              primary 
            />
            <ActionButton 
              href="mailto:elitenwflooring@gmail.com" 
              icon={<Mail className="w-4 h-4" />} 
              label="Request a Free Quote" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-100/50">
             <div className="flex items-center justify-center md:justify-end space-x-3 text-[#1d3b64]">
                <ShieldCheck className="w-5 h-5 text-[#007b22]" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Licensed & Bonded &bull; ELITENF764BT</span>
             </div>
             <div className="flex items-center justify-center md:justify-start space-x-3 text-[#1d3b64]">
                <CheckCircle2 className="w-5 h-5 text-[#007b22]" />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">Guaranteed Workmanship</span>
             </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 space-y-12 pb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 text-[#1d3b64]">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#1d3b64]/60" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg leading-tight">Lynnwood, WA</p>
                <p className="text-[#1d3b64]/40 text-[10px] uppercase tracking-widest font-black mt-0.5">4027 Lincoln Way, 98087</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center space-y-4">
            <p className="text-[9px] md:text-[10px] text-slate-400 uppercase tracking-[0.5em] font-black">
              &copy; {new Date().getFullYear()} Elite Northwest Flooring &bull; Excellence Underfoot
            </p>
            <div className="flex space-x-2 opacity-20">
              <div className="w-1 h-1 rounded-full bg-[#1d3b64]" />
              <div className="w-1 h-1 rounded-full bg-[#1d3b64]" />
              <div className="w-1 h-1 rounded-full bg-[#1d3b64]" />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App;
