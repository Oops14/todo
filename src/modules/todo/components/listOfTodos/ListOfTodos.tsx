"use client";

import { useRouter } from "next/navigation";

import { FC } from "react";

import Todo from "../../Todo";

import { TodosData } from "@/types/TodosDataType";

interface ListOfTodosProps {
  data: TodosData[];
}

const ListOfTodos: FC<ListOfTodosProps> = ({ data }) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to create todo");
      }

      const data = await res.json();
      console.log("Todo removed:", data);

      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      {data.map((d) => (
        <Todo key={d.id} id={d.id} title={d.title} description={d.description} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListOfTodos;
