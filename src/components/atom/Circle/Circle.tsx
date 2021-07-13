import "./style.css";

type recivedNumbers = {
  number: number;
};

const Circle = (props: recivedNumbers): JSX.Element | null => {
  if (typeof props.number !== "number") {
    return null;
  }

  return <div className="circle">{props.number}</div>;
};

export default Circle;
