import { useState } from "react";
import { deleteTodo } from "../services/deleteTodo";

export const useDelete = (id, onDelete, onError) => {
  const [open, setOpen] = useState(false);

  const openDeleteDialog = () => {
    setOpen(true);
  };

  const closeDeleteDialog = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      onDelete?.();
    } catch (e) {
      onError();
    }
    closeDeleteDialog();
  };

  return {
    openDeleteDialog,
    closeDeleteDialog,
    handleDelete,
    isOpen: open,
  };
};
