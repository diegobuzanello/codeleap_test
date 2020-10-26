import React, { TextareaHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  idName: string;
  placeholder: string;
}

export const TextArea: React.FC<InputProps> = ({
  label,
  idName,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-block">
      <label htmlFor="name">{label}</label>
      <textarea id={idName} placeholder={placeholder} {...rest}></textarea>
    </div>
  );
};
