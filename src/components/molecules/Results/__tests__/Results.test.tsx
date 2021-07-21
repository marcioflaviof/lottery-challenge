import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderComponentCreator } from "../../../utils/component-creator/ComponentCreator";
import Results from "../Results";

describe("Results", () => {
  const renderComponent = renderComponentCreator(Results);

  describe("when pass an array of numbers", () => {
    it("must render every number in a circle", () => {
      const { getByTestId, getByText } = renderComponent({ results: [1, 3, 5, 7, 8, 54] });

      expect(getByText(/7/i)).toBeInTheDocument();
      expect(getByTestId(/circle-results/i).childElementCount).toBe(6);
    });
  });

  describe("when pass strings in the array", () => {
    it("won't render the strings", () => {
      const { queryByText } = renderComponent({ results: ["8", 2, 3, 5] });

      expect(queryByText(/8/i)).not.toBeInTheDocument();
    });
  });
});
