import React from "react";
import Footer from "./components/atom/Footer/Footer";

import "./style.css";

function App() {
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
