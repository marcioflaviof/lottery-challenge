import Footer from "../atom/footer/Footer";
import "./style.css";

const Background = () => {
  return (
    <div className="Background__container">
      <div className="Background__green-container"></div>
      <div className="Background__gray-container">
        <Footer />
      </div>
    </div>
  );
};

export default Background;
