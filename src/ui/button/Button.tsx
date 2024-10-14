"use client";

import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ ...props }) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
