import { shallow } from "enzyme";
import Button from "../Button";

it("renders without crashing", () => {
  let mountedButton = shallow(<Button />);
});
