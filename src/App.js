import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { Heading } from "./components/Heading";
import { TodoCard } from "./components/TodoCard";
import { TodoForm } from "./components/TodoForm";
import { AddNewTodo } from "./components/AddNewTodo";

import { useModal } from "./hooks/useModal";
import { useList } from "./hooks/useList";

function App() {
  const { list, reloadData } = useList();
  const { openModal, open, close } = useModal();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Heading />
        <AddNewTodo onOpen={open} onClose={close} isOpen={openModal}>
          <TodoForm onSubmit={reloadData} onClose={close} />
        </AddNewTodo>
        {list.map((item) => (
          <TodoCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            onDelete={reloadData}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
