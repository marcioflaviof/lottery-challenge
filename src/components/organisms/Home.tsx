import { useState } from "react";
import useLottery from "../../hooks/useLottery";
import Dropdown from "../atoms/Dropdown/Dropdown";
import Footer from "../atoms/Footer/Footer";
import { Icon } from "../atoms/Icons/Icons";
import Results from "../molecules/Results/Results";

import "./style.css";

const Home = (): JSX.Element => {
  const [results, setResults] = useState<string[]>([]);
  const { getResult, options } = useLottery();

  const onOptionChange = async (selectedOption: string) => {
    const result = await getResult(selectedOption);

    setResults(result.numbers);
  };

  return (
    <>
      <div className="App__container">
        <div className="App__navigation">
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
