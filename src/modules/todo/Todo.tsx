"use client";

import { FC, useState } from "react";

import Button from "@/ui/button/Button";
import Typography from "@/ui/typography/Typography";

import s from "./Todo.module.scss";

interface TodoProps {
  id: number;
  title: string;
  description: string;
  handleDelete: (id: number) => void;
}

const Todo: FC<TodoProps> = ({ id, title, description, handleDelete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className={s.todo_item}>
      {isEditable ? (
        <>
          <div className="todo_top_content">
            <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          </div>
          <div className={s.block_buttons}>
            <Button className={s.block__button} onClick={() => {}}>
              Save
            </Button>
            <Button className={s.block__button} onClick={toggleEdit}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default Todo;
