"use client";

import { FC } from "react";

import { handleDelete } from "@/services/api";

import Todo from "../../modules/todo/Todo";

import { TodosData } from "@/types/TodosDataType";

interface ListOfTodosProps {
  data: TodosData[];
}

const ListOfTodos: FC<ListOfTodosProps> = ({ data }) => {
  return (
    <div>
      <div>
        {data.map((d) => (
          <Todo key={d.id} id={d.id} title={d.title} description={d.description} handleDelete={handleDelete} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ListOfTodos;
