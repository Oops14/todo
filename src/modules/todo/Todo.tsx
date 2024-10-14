"use client";

import { FC, useState } from "react";

import Button from "@/ui/button/Button";
import Typography from "@/ui/typography/Typography";

import s from "./Todo.module.scss";

interface TodoProps {
  id: number;
  title: string;
  description: string;
}

const Todo: FC<TodoProps> = ({ id, title, description }) => {
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
            <input
              type="text"
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
            />
          </div>
          <div>
            <Button onClick={() => {}}>Save</Button>
            <Button onClick={toggleEdit}>Cancel</Button>
          </div>
        </>
      ) : (
        <>
          <div className="todo_top_content">
            <Typography tag="h4">{title}</Typography>
            <div>{description}</div>
          </div>
          <div>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button>X</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
