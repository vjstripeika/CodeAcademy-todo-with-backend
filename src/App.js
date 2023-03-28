import { TodoView } from "./views/TodoView";
import { LoginView } from "./views/LoginView";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Cookies from "js-cookie";

const defaultToken = Cookies.get("_todo_token");

function App() {
  const [token, setToken] = useState(defaultToken);
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        {token ? (
          <TodoView
            onLogout={() => {
              Cookies.remove("_todo_token");
              setToken();
            }}
          />
        ) : (
          <LoginView
            onLogin={(token) => {
              Cookies.set("_todo_token", token, { sameSite: true });
              setToken(token);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
