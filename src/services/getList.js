export const getList = () => {
  return fetch(
    "https://codeacademy-todo.vercel.app/api/list?user=vytautasjonas"
  ).then((response) => response.json());
};
