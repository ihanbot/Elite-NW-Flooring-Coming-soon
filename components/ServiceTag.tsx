
import React from 'react';

interface ServiceTagProps {
  label: string;
}

const ServiceTag: React.FC<ServiceTagProps> = ({ label }) => {
  return (
    <span className="px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.25em] bg-white border border-slate-200 text-[#1d3b64]/70 hover:text-[#007b22] hover:border-[#007b22]/30 transition-all duration-300 cursor-default shadow-sm">
      {label}
    </span>
  );
};

export default ServiceTag;