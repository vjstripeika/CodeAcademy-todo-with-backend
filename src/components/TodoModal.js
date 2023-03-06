import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  zIndex: 1000,
};

export const TodoModal = ({ open, onClose, children }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles} width={matches ? 552 : "100%"}>
        {children}
      </Box>
    </Modal>
  );
};
