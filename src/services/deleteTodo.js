export const deleteTodo = (id) =>
  fetch("https://codeacademy-todo.vercel.app/api/todo?user=vytautasjonas", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
    }),
  }).then((response) => response.json());
