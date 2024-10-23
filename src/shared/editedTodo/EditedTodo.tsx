"use client";

import { FC } from "react";

import { handleUpdate } from "@/services/api";

import Button from "@/ui/button/Button";

import s from "../../modules/todo/Todo.module.scss";

interface EditedTodoProps {
  id: number;
  editedTitle: string;
  setEditedTitle: (editedTitle: string) => void;
  toggleEdit: () => void;
  setIsEditable: (isEditable: boolean) => void;
}

const EditedTodo: FC<EditedTodoProps> = ({ id, editedTitle, setEditedTitle, toggleEdit, setIsEditable }) => {
  return (
    <>
      <div className="todo_top_content">
        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      </div>
      <div className={s.block_buttons}>
        <Button
          className={s.block__button}
          onClick={() => {
            handleUpdate(id, editedTitle);
            setIsEditable(false);
          }}
        >
          Save
        </Button>
        <Button className={s.block__button} onClick={toggleEdit}>
          Cancel
        </Button>
      </div>
    </>
  );
};

export default EditedTodo;
