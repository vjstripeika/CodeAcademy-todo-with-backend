import { LIST } from "../utils/routes";
import Cookies from "js-cookie";

export const getList = () => {
  const token = Cookies.get("_todo_token");

  return fetch(LIST, {
    headers: {
      token,
    },
  }).then((response) => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  });
};
