import { updateTodo } from "../services/updateTodo";

export const useUpdate = ({ id, title, description, completed }) => {
  const onComplete = () => {
    updateTodo({ _id: id, title, description, completed: true });
  };

  const onIncomplete = () => {
    updateTodo({ _id: id, title, description, completed: false });
  };

  return { onComplete, onIncomplete };
};
