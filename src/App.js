import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { Heading } from "./components/Heading";
import { TodoCard } from "./components/TodoCard";
import { TodoForm } from "./components/TodoForm";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodoSkeleton } from "./components/TodoSkeleton";

import { useModal } from "./hooks/useModal";
import { useList } from "./hooks/useList";
import { Fragment } from "react";

function App() {
  const { list, reloadData, loading } = useList();
  const { openModal, open, close } = useModal();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Heading />
        <AddNewTodo onOpen={open} onClose={close} isOpen={openModal}>
          <TodoForm onSubmit={reloadData} onClose={close} />
        </AddNewTodo>
        {loading ? (
          <Fragment>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
          </Fragment>
        ) : (
          list.map((item) => (
            <TodoCard
              key={item._id}
              id={item._id}
              title={item.title}
              completed={item.completed}
              description={item.description}
              onDelete={reloadData}
            />
          ))
        )}
      </Container>
    </div>
  );
}

export default App;
