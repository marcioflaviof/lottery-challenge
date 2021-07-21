import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderComponentCreator } from "../../../utils/component-creator/ComponentCreator";
import Circle from "../Circle";

describe("Circle", () => {
  const renderComponent = renderComponentCreator(Circle);

  describe("when calls with correct arguments", () => {
    it("must render with passed number", () => {
      const { getByText } = renderComponent({ number: 5 });

      expect(getByText(/5/i)).toBeInTheDocument();
    });
  });
});
