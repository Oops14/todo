import Button from "@/ui/button/Button";
import Form from "@/ui/form/Form";
import Input from "@/ui/input/Input";

import s from "./AddTodoForm.module.scss";
import { useFormState } from "react-dom";

const AddTodoForm = () => {
  const [state, fromAction] = useFormState();

  return (
    <Form className={s.todolist__form} action={fromAction}>
      <Input
        placeholder="Enter the title of todo"
        className={s.todolist__input}
      />
      <Button type="submit" className={s.todolist__button}>
        Add
      </Button>
    </Form>
  );
};

export default AddTodoForm;
