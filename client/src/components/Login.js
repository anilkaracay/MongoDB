import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:5000/Login",
      { mail, password }
        .then((result) => {
          console.log(result);
          if (result.data === "Success") {
            navigate("/home");
          }
        })
        .catch((err) => console.log(err))
    );
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          backgroundColor: "white",
          marginTop: 8,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Sign In
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
