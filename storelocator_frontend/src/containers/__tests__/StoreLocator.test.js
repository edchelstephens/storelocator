import { render } from "@testing-library/react";
import StoreLocator from "../StoreLocator";

it("renders withouth crashing", () => {
  const div = document.createElement("div");
  render(<StoreLocator />, div);
});
