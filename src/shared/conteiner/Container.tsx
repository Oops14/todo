"use server";

import { FC, HTMLAttributes } from "react";

import s from "./Container.module.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ ...props }) => {
  return (
    <div className={s.container} {...props}>
      {props.children}
    </div>
  );
};

export default Container;
