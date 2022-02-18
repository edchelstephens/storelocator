import { shallow } from "enzyme";

import axios from "axios";

import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("calls axios.get in #componentDidMount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("calls axios.get with correct url", ()=>{
    return mountedStoreLocator.instance().componentDidMount().then(()=>{
      expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/data/shops.json")
    })
  })

  it("renders without crashing", () => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders three buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  });

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});

describe("chooseMap", () => {
  it("updates the state currentMap using the location passed to it", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: "Aloran" } };

    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe("aloran.png");
  });
});
