"use client";

import { useRouter } from "next/navigation";

import SubmitButton from "@/components/submitButton/SubmitButton";

import Form from "@/ui/form/Form";
import Input from "@/ui/input/Input";

import s from "./AddTodoForm.module.scss";

const AddTodoForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch(`http://localhost:3000/todos`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create todo");
      }

      const data = await res.json();
      console.log("Todo created:", data);

      router.refresh();
      // Reset the form.
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form className={s.todolist__form} onSubmit={handleSubmit}>
      <Input placeholder="Enter the title of todo" className={s.todolist__input} type="text" name="title" required />
      <Input
        placeholder="Enter the Description"
        className={s.todolist__input}
        type="text"
        name="description"
        required
      />
      <SubmitButton className={s.todolist__button} />
    </Form>
  );
};

export default AddTodoForm;
