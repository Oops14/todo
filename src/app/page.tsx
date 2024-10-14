"use server";

import ListOfTodos from "@/modules/todo/components/listOfTodos/ListOfTodos";
import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

import Typography from "@/ui/typography/Typography";

import { getData } from "@/services/api";

import { TodosData } from "@/types/TodosDataType";

import s from "./page.module.scss";

export default async function Home() {
  const data: TodosData[] = await getData();

  console.log(data);

  return (
    <div className={s.page}>
      <main>
        <div className={s.todolist}>
          <Typography tag="h2" className={s.todolist__title}>
            Todolist
          </Typography>

          <AddTodoForm />

          <ListOfTodos data={data} />
        </div>
      </main>
    </div>
  );
}
