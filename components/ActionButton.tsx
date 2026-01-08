
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
        className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-blue-900/20"
      >
        {icon}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      className="flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default ActionButton;
