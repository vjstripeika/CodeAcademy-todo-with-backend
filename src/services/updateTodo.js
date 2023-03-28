import { TODO } from "../utils/routes";
import Cookies from "js-cookie";

export const updateTodo = (todo) => {
  const token = Cookies.get("_todo_token");

  return fetch(TODO, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify(todo),
  }).then((response) => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  });
};
