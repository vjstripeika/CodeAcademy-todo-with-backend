import { TODO } from "../utils/routes";

export const deleteTodo = (id) =>
  fetch(TODO, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
    }),
  }).then((response) => response.json());
