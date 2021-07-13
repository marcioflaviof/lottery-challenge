import Circle from "../atom/Circle";

import "./style.css";

const Results = (results: number[]): JSX.Element => {
  return (
    <div className="results">
      {results.map((circleNumber) => {
        <Circle number={circleNumber} />;
      })}
    </div>
  );
};

export default Results;
