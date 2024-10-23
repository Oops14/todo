"use server";

import ListOfTodos from "@/modules/todo/components/listOfTodos/ListOfTodos";

import { getPagesData } from "@/services/api";

import Typography from "@/ui/typography/Typography";

import Pagination from "@/shared/pagination/Pagination";
import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

import { TodosData } from "@/types/TodosDataType";

import s from "../page.module.scss";

interface PaginationProps {
  searchParams: {
    page: string;
  };
}

export default async function TodosPage({ searchParams }: PaginationProps) {
  const currentPage = parseInt(searchParams.page || "1");

  const data: TodosData[] = await getPagesData(currentPage);

  const totalPages = data.length;

  return (
    <div className={s.page}>
      <main className={s.main_content}>
        <div className={s.todolist}>
          <Typography tag="h2" className={s.todolist__title}>
            Todolist - Page {currentPage}
          </Typography>

          <AddTodoForm />

          <ListOfTodos data={data} />

          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </main>
    </div>
  );
}
