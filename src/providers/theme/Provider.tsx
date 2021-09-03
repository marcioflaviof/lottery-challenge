import { useState } from "react";
import React from "react";
import { ThemeContext } from "./Context";

type ProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ProviderProps): JSX.Element {
  const [theme, setTheme] = useState("default");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider };
