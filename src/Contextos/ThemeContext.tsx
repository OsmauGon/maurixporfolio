// contexts/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';

type ThemeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
  setMode: (mode: PaletteMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    // Recuperar tema guardado en localStorage o usar preferencia del sistema
    const savedMode = localStorage.getItem('theme-mode') as PaletteMode;
    if (savedMode) return savedMode;
    
    // Detectar preferencia del sistema
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? 'dark' : 'light';
  });

  const toggleColorMode = () => {
    setMode((prevMode: "light" | "dark") => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Guardar tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  // Escuchar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Solo actualizar si no hay tema guardado manualmente
      if (!localStorage.getItem('theme-mode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};