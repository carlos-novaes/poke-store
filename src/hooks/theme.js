import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import StoresTheme from '../theme/Color';

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({});

  const changeTheme = useCallback(
    (name) => {
      if (StoresTheme[name] && theme !== StoresTheme[name]) {
        setTheme(StoresTheme[name]);
      }
    },
    [theme],
  );

  const value = useMemo(() => ({ changeTheme, theme }), [changeTheme, theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within a CartProvider`);
  }

  return context;
}

export { ThemeProvider, useTheme };
