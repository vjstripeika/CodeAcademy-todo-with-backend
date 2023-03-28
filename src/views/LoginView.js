import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { RegisterForm } from "../components/RegisterForm";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { loginUser } from "../services/loginUser";

export const LoginView = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Heading title="Login or Register" />
      <form
        onSubmit={handleSubmit(async (data) => {
          setLoading(true);
          try {
            const res = await loginUser(data);
            onLogin(res.token);
            setError(null);
          } catch (err) {
            setError("Failed to login. Please try again.");
          }
          setLoading(false);
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField label="Email" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <Button variant="contained" type="submit">
            {loading ? "Loading..." : "Login"}
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <RegisterForm />
    </>
  );
};
