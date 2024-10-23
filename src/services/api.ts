"use server";

import { revalidateTodos } from "./actions";

export const getData = async () => {
  const response = await fetch(`http://localhost:3000/todos/`, {
    next: { revalidate: 1600, tags: ["todos"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  await revalidateTodos();

  return await response.json();
};

export const getPagesData = async (page: number) => {
  const response = await fetch(`http://localhost:3000/todos/?page=${page}`, {
    next: { revalidate: 1600, tags: ["todos"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};

export const handleSubmit = async (title: string, description: string) => {
  try {
    const res = await fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, description: description }),
    });

    if (!res.ok) {
      throw new Error("Failed to create todo");
    }

    await revalidateTodos();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const handleDelete = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to create todo");
    }

    await revalidateTodos();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const handleUpdate = async (id: number, editedTitle: string) => {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: editedTitle }),
    });

    if (!res.ok) {
      throw new Error("Failed to update todo");
    }

    await revalidateTodos();
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};
