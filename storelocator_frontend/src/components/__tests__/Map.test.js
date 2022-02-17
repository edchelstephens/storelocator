import { shallow } from "enzyme";
import Map from "../Map";

describe("Map", () => {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  it("renders without crashing", () => {
    shallow(<Map />);
  });

  it("contains an image", () => {
    const img = mountedMap.find("img");
    expect(img.length).toBe(1);
  });

  it("displays the none map when no parameters are given", () => {
    let defaultMap = shallow(<Map />);
    const defaultImage = defaultMap.find('img[src="images/none.png"]');
    expect(defaultMap.length).toBe(1);
  });

  it("displays the map image name passed to it", () => {
    mountedMap = shallow(<Map imageName="testmap.png" />);
    const mapImage = mountedMap.find('img[src="images/testmap.png"]');
    expect(mapImage.length).toBe(1);
  });
});
