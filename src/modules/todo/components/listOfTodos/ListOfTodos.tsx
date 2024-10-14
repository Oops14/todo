import { FC } from "react";

import Todo from "../../Todo";

import { TodosData } from "@/types/TodosDataType";

interface ListOfTodosProps {
  data: TodosData[];
}

const ListOfTodos: FC<ListOfTodosProps> = ({ data }) => {
  return (
    <div>
      {data.map(d => (
        <Todo
          key={d.id}
          id={d.id}
          title={d.title}
          description={d.description}
        />
      ))}
    </div>
  );
};

export default ListOfTodos;
