"use server";

import ListOfTodos from "@/modules/todo/components/listOfTodos/ListOfTodos";
import { getPagesData } from "@/services/api";
import Typography from "@/ui/typography/Typography";
import s from "../page.module.scss"; // Updated path based on your directory structure
import Pagination from "@/shared/pagination/Pagination";
import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

interface PaginationProps {
  searchParams: {
    page?: string;
  };
}

export default async function TodosPage({ searchParams }: PaginationProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const data = await getPagesData(currentPage);

  return (
    <div className={s.page}>
      <main className={s.main_content}>
        <div className={s.todolist}>
          <Typography tag="h2" className={s.todolist__title}>
            Todolist - Page {currentPage}
          </Typography>

          <AddTodoForm />

          <ListOfTodos data={data} />

          <Pagination currentPage={currentPage} totalPages={10} />
        </div>
      </main>
    </div>
  );
}
