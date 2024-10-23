"use client";

import { FC } from "react";

import Button from "@/ui/button/Button";
import Typography from "@/ui/typography/Typography";

import s from "../../modules/todo/Todo.module.scss";

interface DefaultTodoProps {
  id: number;
  title: string;
  description: string;
  toggleEdit: () => void;
  handleDelete: (id: number) => void;
}

const DefaultTodo: FC<DefaultTodoProps> = ({ id, title, description, toggleEdit, handleDelete }) => {
  return (
    <>
      <div className="todo_top_content">
        <Typography className={s.todo_top_content__title} tag="h4">
          {title}
        </Typography>
        <div className={s.todo_top_content__description}>{description}</div>
      </div>
      <div className={s.block_buttons}>
        <Button className={s.block__button} onClick={toggleEdit}>
          Edit
        </Button>
        <Button
          className={s.block__button}
          onClick={() => {
            handleDelete(id);
          }}
        >
          X
        </Button>
      </div>
    </>
  );
};

export default DefaultTodo;
