import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Dropdown from "../../Dropdown/Dropdown";

describe("Dropdown", () => {
  describe("when calls", () => {
    it("must render with 6 options", () => {
      const { getByRole, debug } = render(<Dropdown />);

      expect(getByRole("combobox")).toBeInTheDocument();
      expect(getByRole("combobox").childElementCount).toStrictEqual(6);
    });

    it("must have QUINA", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /quina/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /quina/i }).firstChild?.nodeValue).toStrictEqual("QUINA");
    });
  });
});
