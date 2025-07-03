import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7, Logout } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const { mode, toggleMode } = useTheme();
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TeamUp PE
        </Typography>
        <Box>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Button
            color="inherit"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{ ml: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
