"use server";

import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

const Input: FC<InputProps> = ({ type = "text", ...props }) => {
  return <input {...props} type={type} />;
};

export default Input;
