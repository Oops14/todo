"use client";

import { FC, useState } from "react";

import EditedTodo from "./components/editedTodo/EditedTodo";
import DefaultTodo from "./components/defaultTodo/DefaultTodo";

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
          <EditedTodo
            id={id}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            toggleEdit={toggleEdit}
            setIsEditable={setIsEditable}
          />
        </>
      ) : (
        <>
          <DefaultTodo
            id={id}
            title={title}
            description={description}
            handleDelete={handleDelete}
            toggleEdit={toggleEdit}
          />
        </>
      )}
    </div>
  );
};

export default Todo;
