import Ball from "../atom/Ball";

import "./style.css";

const BallHolder = () => {
  return (
    <div className="ball-holder">
      <Ball number={"06"} />
      <Ball number={"09"} />
      <Ball number={"28"} />
      <Ball number={"33"} />
      <Ball number={"37"} />
      <Ball number={"40"} />
    </div>
  );
};

export default BallHolder;
