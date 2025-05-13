import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { TextField, Button, Container, Typography, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      login(res.data.token);
      navigate("/");
    } catch (err) {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={6} style={{ padding: 32, width: 320 }}>
        <Typography variant="h5" gutterBottom align="center">
          Acesso ao Sistema
        </Typography>

        <TextField
          fullWidth
          label="Usuário"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </Paper>
    </Box>
  );
}
