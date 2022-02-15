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

  it("renders two buttons", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(2);
  });
});
