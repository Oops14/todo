"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import { useFormStatus } from "react-dom";

import Button from "@/ui/button/Button";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton: FC<SubmitButtonProps> = ({ ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button {...props} disabled={pending}>
      Add
    </Button>
  );
};

export default SubmitButton;
