"use server";

import ListOfTodos from "@/components/listOfTodos/ListOfTodos";

import { getData } from "@/services/api";

import Pagination from "@/shared/pagination/Pagination";
import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

import Typography from "@/ui/typography/Typography";

import { TodosData } from "@/types/TodosDataType";

import s from "./page.module.scss";

export default async function Home() {
  const data: TodosData[] = await getData();

  const totalPages = data.length - 1;

  return (
    <div className={s.page}>
      <main className={s.main_content}>
        <div className={s.todolist}>
          <Typography tag="h2" className={s.todolist__title}>
            Todolist
          </Typography>

          <AddTodoForm />

          <ListOfTodos data={data} />

          <Pagination currentPage={0} totalPages={totalPages} />
        </div>
      </main>
    </div>
  );
}
