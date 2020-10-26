import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  type?: any;
  mode?: any;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  mode,
  ...rest
}: any) => {
  return (
    <button className={mode} type={type} {...rest}>
      {title}
    </button>
  );
};
