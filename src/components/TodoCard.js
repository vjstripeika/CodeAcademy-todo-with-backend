import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteTodo } from "../services/deleteTodo";

const useDelete = (id, onDelete) => {
  const [open, setOpen] = useState(false);

  const openDeleteDialog = () => {
    setOpen(true);
  };

  const closeDeleteDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteTodo(id).then(() => {
      if (onDelete) onDelete();
    });
  };

  return {
    openDeleteDialog,
    closeDeleteDialog,
    handleDelete,
    isOpen: open,
  };
};

export const TodoCard = ({ title, description, id, onDelete }) => {
  const { openDeleteDialog, closeDeleteDialog, handleDelete, isOpen } =
    useDelete(id, onDelete);
    
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography fontWeight="bold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" gap={2} alignItems="self-start">
          <Typography>{description}</Typography>
          <Button
            size="small"
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={openDeleteDialog}
          >
            Delete
          </Button>

          <Dialog open={isOpen} onClose={closeDeleteDialog}>
            <DialogTitle>
              Are you sure you want to delete "{title}"?
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={closeDeleteDialog}
                size="small"
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                autoFocus
                size="small"
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
