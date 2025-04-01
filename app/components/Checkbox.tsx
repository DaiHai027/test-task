import React from "react";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
  id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        {label && (
          <span className="text-gray-700 font-['Montserrat'] text-sm font-normal leading-[130%] align-middle">
            {label}
          </span>
        )}
        <div
          className="w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
          onClick={onChange}
        >
          {checked && (
            <div className="bg-[#2469F6] w-6 h-6 rounded-md flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
      </div>
      {id === "all" && <div className="h-[1px] w-full bg-gray-200" />}
    </>
  );
};
