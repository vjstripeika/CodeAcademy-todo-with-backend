import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/registerUser";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <Alert severity="success">Register successful! You can now login.</Alert>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        if (formData.password !== formData.passwordRepeat) {
          setError("Passwords must match!");
          return;
        }
        try {
          setLoading(true);
          await registerUser({
            email: formData.email,
            password: formData.password,
          });
          setError(null);
          setSuccess(true);
        } catch (err) {
          setError("Failed to register user");
        }
        setLoading(false);
      })}
    >
      <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Email" {...register("email")} />
        <TextField type="password" label="Password" {...register("password")} />
        <TextField
          type="password"
          label="Password (repeat)"
          {...register("passwordRepeat")} />
        <Button variant="contained" type="submit">
          {loading ? "Loading…" : "Register"}
        </Button>
      </Box>
    </form>
  );
};
