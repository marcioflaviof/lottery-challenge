import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Circle from "../Circle";

describe("Circle", () => {
  describe("when calls with correct arguments", () => {
    it("must render with passed number", () => {
      const { getByText } = render(<Circle number={5} />);

      expect(getByText(/5/i)).toBeInTheDocument();
    });
  });

  describe("when calls with incorrect arguments", () => {
    it("must not render", () => {
      const { queryByText } = render(<Circle number={"5"} />);

      expect(queryByText(/5/i)).not.toBeInTheDocument();
    });
  });
});
