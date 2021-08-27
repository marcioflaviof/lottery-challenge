import { useState } from "react";
import React from "react";
import { ThemeContext } from "./Context";

type ProviderProps = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: ProviderProps): JSX.Element {
  const [lottery, setLottery] = useState("mega-sena");

  return <ThemeContext.Provider value={{ lottery, setLottery }}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider };
