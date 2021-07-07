import "./style.css";

type recivedNumbers = {
  number: string;
};

const Ball = (props: recivedNumbers) => {
  return <div className="ball">{props.number}</div>;
};

export default Ball;
