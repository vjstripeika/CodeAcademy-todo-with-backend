import { Box, Typography, TextField, Button } from "@mui/material";
import { postTodo } from "../services/postTodo";
import { updateTodo } from "../services/updateTodo";

import { useForm } from "react-hook-form";

export const TodoForm = ({ onClose, editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: editData || {
      title: "",
      description: "",
      completed: false,
    },
  });

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">
        {editData ? "Edit Todo" : "Add Todo"}
      </Typography>
      <form
        onSubmit={handleSubmit(async (data) => {
          if (editData) {
            await updateTodo(data);
          } else {
            await postTodo(data);
          }
          onClose?.();
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField required {...register("title")} label="Title" fullWidth />
          <TextField
            required
            {...register("description")}
            label="Description"
            fullWidth
          />
          <Button variant="contained" type="submit">
            {editData ? "Edit Todo" : "Add Todo"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
