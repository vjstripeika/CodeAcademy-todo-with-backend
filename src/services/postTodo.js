export const postTodo = (todo) => {
  return fetch(
    "https://codeacademy-todo.vercel.app/api/todo?user=vytautasjonas",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  ).then((response) => response.json());
};
