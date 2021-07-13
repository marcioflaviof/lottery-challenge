import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  describe("when calls", () => {
    it("must render with 6 options", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("combobox")).toBeInTheDocument();
      expect(getByRole("combobox").childElementCount).toStrictEqual(6);
    });

    it("must have MEGA-SENA", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /mega-sena/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /mega-sena/i }).firstChild?.nodeValue).toStrictEqual(
        "MEGA-SENA"
      );
    });

    it("must have QUINA", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /quina/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /quina/i }).firstChild?.nodeValue).toStrictEqual("QUINA");
    });

    it("must have LOTOFACIL", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /lotofacil/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /lotofacil/i }).firstChild?.nodeValue).toStrictEqual(
        "LOTOFACIL"
      );
    });

    it("must have LOTOMANIA", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /lotomania/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /lotomania/i }).firstChild?.nodeValue).toStrictEqual(
        "LOTOMANIA"
      );
    });

    it("must have TIMEMANIA", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /timemania/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /timemania/i }).firstChild?.nodeValue).toStrictEqual(
        "TIMEMANIA"
      );
    });

    it("must have DIA DE SORTE", () => {
      const { getByRole } = render(<Dropdown />);

      expect(getByRole("option", { name: /dia de sorte/i })).toBeInTheDocument();
      expect(getByRole("option", { name: /dia de sorte/i }).firstChild?.nodeValue).toStrictEqual(
        "DIA DE SORTE"
      );
    });
  });
});
