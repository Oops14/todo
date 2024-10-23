"use server";

import ListOfTodos from "@/modules/todo/components/listOfTodos/ListOfTodos";

import { getPagesData } from "@/services/api";

import Pagination from "@/shared/pagination/Pagination";
import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

import Typography from "@/ui/typography/Typography";

import s from "./page.module.scss";

export default async function Home() {
  const data = await getPagesData(0);

  return (
    <div className={s.page}>
      <main className={s.main_content}>
        <div className={s.todolist}>
          <Typography tag="h2" className={s.todolist__title}>
            Todolist
          </Typography>

          <AddTodoForm />

          <ListOfTodos data={data} />

          <Pagination currentPage={0} />
        </div>
      </main>
    </div>
  );
}
