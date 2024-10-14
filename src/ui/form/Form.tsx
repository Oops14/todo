"use server";

import { FC, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<FormProps> = ({ ...props }) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
