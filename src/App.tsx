import React from "react";
import Footer from "./components/atoms/Footer/Footer";

import "./style.css";

function App() : JSX.Element {
  return (
    <>
      <div className="App__container">
        <div className="App__navigation"></div>
        <div className="App__content">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
