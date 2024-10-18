import { useRouter } from "next/navigation";

import { FC } from "react";

import Button from "@/ui/button/Button";

import s from "../../Todo.module.scss";

interface EditedTodoProps {
  id: number;
  editedTitle: string;
  setEditedTitle: (editedTitle: string) => void;
  toggleEdit: () => void;
  setIsEditable: (isEditable: boolean) => void;
}

const EditedTodo: FC<EditedTodoProps> = ({ id, editedTitle, setEditedTitle, toggleEdit, setIsEditable }) => {
  const router = useRouter();

  const handleUpdate = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editedTitle }),
      });

      if (!res.ok) {
        throw new Error("Failed to update todo");
      }

      router.refresh();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
      <div className="todo_top_content">
        <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
      </div>
      <div className={s.block_buttons}>
        <Button
          className={s.block__button}
          onClick={() => {
            handleUpdate(id);
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
