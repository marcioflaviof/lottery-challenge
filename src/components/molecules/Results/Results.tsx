import Circle from "../../atoms/Circle/Circle";

import "./style.css";

type PropsType = {
  results: number[];
};

const Results = (props: PropsType): JSX.Element => {
  return (
    <div data-testid="circle-results" className="results">
      {props.results.map((circleNumber) => (
        <Circle key={circleNumber} number={circleNumber} />
      ))}
    </div>
  );
};

export default Results;
