import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};

function getInitialMode(): ThemeMode {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("themeMode");
    if (stored === "light" || stored === "dark") return stored;
  }
  return "dark";
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
