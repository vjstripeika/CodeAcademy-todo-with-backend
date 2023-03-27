import React from "react";
import { Heading } from "../components/Heading";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/registerUser";

/**
 * email
 * password
 * confirmPassword
 *
 * submitButton
 */

export const LoginView = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Heading title="Login or Register" />
      <form>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" />
          <TextField label="Password" />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <form
        onSubmit={handleSubmit((formData) => {
          if (formData.password !== formData.passwordRepeat) {
            // show error
            return;
          }

          registerUser({
            email: formData.email,
            password: formData.password,
          }).then(console.log)
          // POST user to our backend
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <TextField
            label="Password (repeat)"
            {...register("passwordRepeat")}
          />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </>
  );
};
