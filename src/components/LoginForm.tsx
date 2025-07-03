// src/components/LoginForm.tsx
import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

type Props = {
  onSubmit: (email: string, password: string) => void;
  loading?: boolean;
  error?: string | null;
};

const LoginForm: React.FC<Props> = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
      sx={{ width: 320, mx: "auto", mt: 8 }}
    >
      <Typography variant="h5" mb={2}>
        Login
      </Typography>
      <TextField
        label="Username/Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
};

export default LoginForm;
