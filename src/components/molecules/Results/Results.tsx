import Circle from "../../atoms/Circle/Circle";

import "./style.css";

type PropsType = {
  circles: string[];
};

const Results = ({ circles }: PropsType): JSX.Element => {
  return (
    <div data-testid="circle-results" className="results">
      {circles.map((circleNumber) => (
        <Circle key={circleNumber} value={circleNumber} />
      ))}
    </div>
  );
};

export default Results;
