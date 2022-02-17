import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    let mountedHeader = shallow(<Header />);
  });
});
