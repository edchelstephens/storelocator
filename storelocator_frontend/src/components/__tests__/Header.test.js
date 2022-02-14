import { render } from "@testing-library/react";
import Header from "../Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Header />, div);
});
