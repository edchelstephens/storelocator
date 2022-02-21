import { shallow } from "enzyme";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    let mountedApp = shallow(<App />);
  });

  it("renders StoreLocator", () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");
    expect(locators.length).toBe(1);
  });
});
