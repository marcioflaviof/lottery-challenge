import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { renderComponentCreator } from "../../../utils/component-creator/ComponentCreator";
import Circle from "../Circle";

describe("Circle", () => {
  const renderComponent = renderComponentCreator(Circle, () => ({}));

  describe("when calls with correct arguments", () => {
    it("must render with passed number", () => {
      const { getByText, debug, container } = renderComponent({ number: 6 });

      debug(container);

      expect(getByText(/5/i)).toBeInTheDocument();
    });
  });
});
