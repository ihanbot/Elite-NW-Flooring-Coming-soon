
import React from 'react';

interface ServiceTagProps {
  label: string;
}

const ServiceTag: React.FC<ServiceTagProps> = ({ label }) => {
  return (
    <span className="px-5 py-2 rounded-full text-sm font-medium bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-default">
      {label}
    </span>
  );
};

export default ServiceTag;
