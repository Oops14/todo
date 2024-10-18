"use server";

import { useState } from "react";

import ListOfTodos from "@/modules/todo/components/listOfTodos/ListOfTodos";

import AddTodoForm from "@/shared/addTodoForm/AddTodoForm";

import Typography from "@/ui/typography/Typography";

import s from "./page.module.scss";

const getData = async (page: number) => {
  const response = await fetch(`http://localhost:3000/todos/?page=${page}`, {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};

export default async function Home() {
  const data = await getData(0);

  return (
    <div className={s.page}>
      <main className={s.main_content}>
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
