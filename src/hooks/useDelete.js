import { useState } from "react";
import { deleteTodo } from "../services/deleteTodo";

export const useDelete = (id, onDelete) => {
  const [open, setOpen] = useState(false);

  const openDeleteDialog = () => {
    setOpen(true);
  };

  const closeDeleteDialog = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await deleteTodo(id);

    onDelete?.();
  };

  return {
    openDeleteDialog,
    closeDeleteDialog,
    handleDelete,
    isOpen: open,
  };
};
