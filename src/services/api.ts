export const getData = async () => {
  const response = await fetch(`${process.env.BACKEND_URL}/todos`, {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};

// export const updateTodo = async (id: number, newTitle: string) => {
//   const response = await fetch(`${process.env.BACKEND_URL}/todos/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title: newTitle }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update todo");
//   }

//   return await response.json();
// };
