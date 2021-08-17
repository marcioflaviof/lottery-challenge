import Dropdown from "../atoms/Dropdown/Dropdown";
import Footer from "../atoms/Footer/Footer";
import Results from "../molecules/Results/Results";

import "./style.css";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="App__container">
        <div className="App__navigation">
          <Dropdown />
        </div>
        <div className="App__content">
          <Results circles={[10, 23, 45, 68, 70, 55]} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export { Home };
