import { createContext, useContext } from "react";

type ThemeProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext({} as ThemeProps);
const useThemeContext = (): ThemeProps => useContext(ThemeContext);

export { ThemeContext, useThemeContext };
