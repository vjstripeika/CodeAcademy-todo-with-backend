import { TODO } from "../utils/routes";

export const updateTodo = (todo) => {
  return fetch(
    TODO,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  ).then((response) => response.json());
};
