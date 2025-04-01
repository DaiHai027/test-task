import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  fullWidth = false, 
  children, 
  className = "",
  ...props 
}) => {
  const baseClasses = "cursor-pointer py-2 rounded-md text-center transition-colors font-['Montserrat'] text-[14px] font-normal leading-[130%] tracking-[0px] align-middle";
  
  const variantClasses = {
    primary: "bg-[#FFCE22] hover:bg-[#FFD84D]",
    secondary: "bg-[#FFCE22] hover:bg-[#FFD84D] text-black"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};