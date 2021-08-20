import { useEffect, useState } from "react";
import useLottery from "../../hooks/useLottery";
import Dropdown from "../atoms/Dropdown/Dropdown";
import Footer from "../atoms/Footer/Footer";
import { Icon } from "../atoms/Icons/Icons";
import Results from "../molecules/Results/Results";

import "./style.css";

const Home = (): JSX.Element => {
  const [lottery, setLottery] = useState("mega-sena");
  const [results, setResults] = useState<string[]>([]);
  const [dropdownOption, setDropdownOption] = useState("mega-sena");
  const { getResult, options } = useLottery();

  const choosedLottery: Record<string, string> = {
    "0": "mega-sena",
    "1": "quina",
    "2": "lotofacil",
    "3": "lotomania",
    "4": "timemania",
    "5": "dia-de-sorte",
  };

  useEffect(() => {
    setLottery(choosedLottery[dropdownOption]);
  }, [dropdownOption]);

  const onOptionChange = async (selectedOption: string) => {
    setDropdownOption(selectedOption);
    const result = await getResult(selectedOption);

    setResults(result.numbers);
  };

  return (
    <>
      <div className="App__container">
        <div className={`App__navigation App__navigation--theme-${lottery}`}>
          <Dropdown options={options} onChange={onOptionChange} />
          <div className="App__logo">
            <Icon />
            <h1>MEGA-SENA</h1>
          </div>
        </div>
        <div className="App__content">
          <Results circles={results} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export { Home };
