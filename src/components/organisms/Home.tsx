import { useState } from "react";
import useLottery from "../../hooks/useLottery";
import Dropdown from "../atoms/Dropdown/Dropdown";
import Footer from "../atoms/Footer/Footer";
import { Icon } from "../atoms/Icons/Icons";
import Results from "../molecules/Results/Results";
import { useThemeContext } from "../../providers/theme/Context";
import "./style.css";

const Home = (): JSX.Element => {
  const [results, setResults] = useState<string[]>([]);
  const { getResult, lotteries } = useLottery();
  const { theme, setTheme } = useThemeContext();

  const onOptionChange = async (selectedOption: string) => {
    setTheme(lotteries.filter((lottery) => lottery.id === parseInt(selectedOption))[0].slug);
    const result = await getResult(selectedOption);

    setResults(result.numbers);
  };

  return (
    <>
      <div className="App__container">
        <div className={`App__navigation App__navigation--theme-${theme}`}>
          <Dropdown options={lotteries} onChange={onOptionChange} />
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
