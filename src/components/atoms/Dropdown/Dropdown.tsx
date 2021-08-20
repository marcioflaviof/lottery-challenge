import React from "react";
import "./style.css";

export type Option = {
  id: number;
  text: string;
};

type Props = {
  options: Array<Option>;
  onChange: (selectedOption: string) => void;
};

const Dropdown: React.FC<Props> = ({ options, onChange }) => {
  return (
    <div className="dropdown">
      <select className="dropdown__content" onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
