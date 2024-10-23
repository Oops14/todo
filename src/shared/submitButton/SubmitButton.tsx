"use client";

import React, { ButtonHTMLAttributes, FC } from "react";

import Button from "@/ui/button/Button";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton: FC<SubmitButtonProps> = ({ ...props }) => {
  return <Button {...props}>Add</Button>;
};

export default SubmitButton;
