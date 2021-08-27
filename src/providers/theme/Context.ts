import { createContext, useContext } from "react";

type ThemeProps = {
  lottery: string;
  setLottery: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext({} as ThemeProps);
const useThemeContext = (): ThemeProps => useContext(ThemeContext);

export { ThemeContext, useThemeContext };
