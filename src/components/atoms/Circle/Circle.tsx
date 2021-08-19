import "./style.css";

type PropsType = {
  value: string;
};

const Circle = (props: PropsType): JSX.Element | null => {
  return <div className="circle">{props.value}</div>;
};

export default Circle;
