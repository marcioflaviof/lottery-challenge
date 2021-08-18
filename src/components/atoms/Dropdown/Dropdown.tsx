import "./style.css";

const Dropdown = (): JSX.Element => {
  return (
    <div className="dropdown">
      <select className="dropdown__content">
        <option value="">MEGA-SENA</option>
        <option value="0">QUINA</option>
        <option value="1">LOTOFACIL</option>
        <option value="2">LOTOMANIA</option>
        <option value="3">TIMEMANIA</option>
        <option value="4">DIA DE SORTE</option>
      </select>
    </div>
  );
};

export default Dropdown;
