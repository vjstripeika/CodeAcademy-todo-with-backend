import { updateTodo } from "../services/updateTodo";

export const useUpdate = ({ id, title, description, completed, onReload }) => {
  const onComplete = async () => {
    await updateTodo({ _id: id, title, description, completed: true });
    onReload();
  };

  const onIncomplete = async () => {
    await updateTodo({ _id: id, title, description, completed: false });
    onReload();
  };

  return { onComplete, onIncomplete };
};
