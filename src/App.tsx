import React from "react";
import Footer from "./components/atom/footer/Footer";

import "./style.css";

function App() {
  return (
    <>
      <div className="Background__container">
        <div className="Background__green-container"></div>
        <div className="Background__gray-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
