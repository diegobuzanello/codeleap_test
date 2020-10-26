import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  idName: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  idName,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor="name">{label}</label>
      <input id={idName} placeholder={placeholder} {...rest} />
    </div>
  );
};
