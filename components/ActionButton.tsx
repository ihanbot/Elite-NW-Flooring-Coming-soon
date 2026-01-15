
import React from 'react';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, icon, label, primary = false }) => {
  if (primary) {
    return (
      <a
        href={href}
        className="flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl bg-[#007b22] hover:bg-[#00641c] text-white font-black transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,123,34,0.25)] uppercase tracking-[0.2em] text-[11px]"
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center justify-center space-x-3 px-10 py-5 rounded-2xl bg-[#1d3b64] hover:bg-[#152a48] text-white font-black transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_30px_rgba(29,59,100,0.15)] uppercase tracking-[0.2em] text-[11px]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default ActionButton;