import { updateTodo } from "../services/updateTodo";

export const useUpdate = ({ id, title, description, onReload, onError }) => {
  const onComplete = async () => {
    try {
      await updateTodo({ _id: id, title, description, completed: true });
      onReload();
    } catch (e) {
      onError(
        `Could not update the task by the name of "${title}". Please try again.`
      );
    }
  };

  const onIncomplete = async () => {
    try {
      await updateTodo({ _id: id, title, description, completed: false });
      onReload();
    } catch (e) {
      onError(
        `Could not update the task by the name of "${title}". Please try again.`
      );
    }
  };

  return { onComplete, onIncomplete };
};
