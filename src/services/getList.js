export const getList = () => {
  return fetch("https://codeacademy-todo.vercel.app/api/list")
    .then((response) => response.json())
    .catch(console.error);
};
