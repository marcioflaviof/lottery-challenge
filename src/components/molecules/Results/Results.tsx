import Circle from "../../atoms/Circle/Circle";

import "./style.css";

type PropsType = {
  circles: number[];
};

const Results = (props: PropsType): JSX.Element => {
  return (
    <div data-testid="circle-results" className="results">
      {props.circles.map((circleNumber) => (
        <Circle key={circleNumber} number={circleNumber} />
      ))}
    </div>
  );
};

export default Results;
