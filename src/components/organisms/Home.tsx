import { useEffect, useState } from "react";
import useLottery from "../../hooks/useLottery";
import Dropdown from "../atoms/Dropdown/Dropdown";
import Footer from "../atoms/Footer/Footer";
import { Icon } from "../atoms/Icons/Icons";
import Results from "../molecules/Results/Results";
import { Option } from "../atoms/Dropdown/Dropdown";

import "./style.css";

const Home = (): JSX.Element => {
  const [options, setOptions] = useState<Option[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const { getLotteries, getResult } = useLottery();

  const onOptionChange = async (selectedOption: string) => {
    const result = await getResult(selectedOption);

    setResults(result.numbers);
  };

  useEffect(() => {
    const lotteries = async () =>
      await getLotteries()
        .then((lotteries) => {
          return lotteries.map((lottery) => {
            return {
              id: lottery.id,
              text: lottery.name.toUpperCase(),
            } as Option;
          });
        })
        .then((option) => setOptions(option));

    void lotteries();
  }, []);

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
