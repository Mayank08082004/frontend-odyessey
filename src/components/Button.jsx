// src/components/Button.jsx
import React from 'react';

export const Button = ({ variant = 'primary', children, ...props }) => {
  const baseStyles = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em]";

  const variants = {
    primary: "bg-[#1980e6] text-slate-50 hover:bg-[#146cbb]",
    secondary: "bg-[#e7edf3] text-[#0e141b] hover:bg-[#d0d7e0]",
    danger: "bg-[#dc2626] text-slate-50 hover:bg-[#b91c1c]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
