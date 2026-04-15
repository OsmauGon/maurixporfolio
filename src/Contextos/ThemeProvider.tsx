// providers/ThemeProvider.tsx
import { ThemeProvider as MuiThemeProvider, PaletteMode, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider, useThemeContext } from './ThemeContext';

// Configuración de temas personalizados
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: mode === 'light' ? '#9c27b0' : '#ce93d8',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#121212',
      paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? '#666666' : '#aaaaaa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

// Componente interno que usa el contexto
const ThemedApp = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeContext();
  const theme = createTheme(getDesignTokens(mode));

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

// Provider principal
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <ThemedApp>{children}</ThemedApp>
    </ThemeContextProvider>
  );
};