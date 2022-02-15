import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  beforeEach(() => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });
});
