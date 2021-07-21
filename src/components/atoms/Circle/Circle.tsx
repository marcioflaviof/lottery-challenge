import "./style.css";

type PropsType = {
  number: number;
};

const Circle = (props: PropsType): JSX.Element | null => {
  if (typeof props.number !== "number") {
    return null;
  }

  return <div className="circle">{props.number}</div>;
};

export default Circle;
