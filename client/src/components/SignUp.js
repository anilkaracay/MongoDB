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

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/SignUp", { name, mail, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
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
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
              Register
            </Button>

            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/Login")}
            >
              You have already an account, Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
