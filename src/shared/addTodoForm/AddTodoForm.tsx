"use client";

import { useState } from "react";

import SubmitButton from "@/shared/submitButton/SubmitButton";

import { handleSubmit } from "@/services/api";

import Form from "@/ui/form/Form";
import Input from "@/ui/input/Input";

import s from "./AddTodoForm.module.scss";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form className={s.todolist__form} action={() => handleSubmit(title, description)}>
      <Input
        placeholder="Enter the title of todo"
        className={s.todolist__input}
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.currentTarget.value);
        }}
        name="title"
        required
      />
      <Input
        placeholder="Enter the Description"
        className={s.todolist__input}
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.currentTarget.value);
        }}
        name="description"
        required
      />
      <SubmitButton className={s.todolist__button} />
    </Form>
  );
};

export default AddTodoForm;
