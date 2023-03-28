import { TODO } from "../utils/routes";
import Cookies from "js-cookie";

export const deleteTodo = (id) => {
  const token = Cookies.get("_todo_token");

  return fetch(TODO, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token,
    },
    body: JSON.stringify({
      _id: id,
    }),
  }).then((response) => {
    if (!response.ok) throw new Error("Request failed");

    return response.json();
  });
};
