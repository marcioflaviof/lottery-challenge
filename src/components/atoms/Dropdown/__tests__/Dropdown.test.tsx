import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { renderComponentCreator } from "../../../utils/component-creator/ComponentCreator";
import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  const renderComponent = renderComponentCreator(Dropdown, () => ({
    options: [
      { id: 1, text: "mega-sena" },
      { id: 3, text: "quina" },
    ],
    onChange: () => {},
  }));

  describe("when pass two options", () => {
    it("must render with two options", () => {
      const { getByRole } = renderComponent({});

      expect(getByRole("combobox")).toBeInTheDocument();
      expect(getByRole("combobox").childElementCount).toStrictEqual(2);
    });

    it("must render the text", () => {
      const { getByRole } = renderComponent({});

      expect(getByRole("option", { name: /mega-sena/ })).toBeInTheDocument();
    });
  });
});
