import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderComponentCreator } from "../../../utils/component-creator/ComponentCreator";
import Results from "../Results";

describe("Results", () => {
  const renderComponent = renderComponentCreator(Results);

  describe("when pass an array of numbers", () => {
    it("must render every number", () => {
      const { getByTestId, getByText } = renderComponent({
        circles: ["1", "3", "5", "7", "8", "54"],
      });

      expect(getByText(/7/i)).toBeInTheDocument();
      expect(getByTestId(/circle-results/i).childElementCount).toBe(6);
    });
  });
});
