// components/ThemeToggle.tsx
import { IconButton, Switch, FormControlLabel, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../Contextos/ThemeContext';
import { useTheme } from '@mui/material/styles';

// Opción 1: Botón con iconos
export const ThemeToggleButton = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useTheme();

  return (
    <Tooltip title={`Cambiar a modo ${mode === 'light' ? 'oscuro' : 'claro'}`}>
      <IconButton onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

// Opción 2: Switch
export const ThemeToggleSwitch = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === 'dark'}
          onChange={toggleColorMode}
          icon={<Brightness4 />}
          checkedIcon={<Brightness7 />}
        />
      }
      label={mode === 'light' ? 'Modo Claro' : 'Modo Oscuro'}
    />
  );
};