import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const AddNewTodo = ({ onOpen }) => {
  return (
    <Box marginBottom={4}>
      <Button variant="contained" onClick={onOpen}>
        Add new Todo
      </Button>
    </Box>
  );
};
