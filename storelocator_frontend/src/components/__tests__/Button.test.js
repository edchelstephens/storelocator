import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });
  it("renders without crashing", () => {
    let mountedButton = shallow(<Button />);
  });

  it("renders a button", () => {
    const button = mountedButton.find("button");
    expect(button.length).toBe(1);
  });

  it("calls a function passed to it when clicked", () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(
      <Button handleClick={mockCallBack} />
    );
    mountedButtonWithCallback.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});

describe("Button when a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1",
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location", () => {
    const locationButton = mountedButton.find(".location-button");
    expect(locationButton.text()).toEqual(`${props.location}`);
  });
});

describe("Button when no location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location", () => {
    const locationButton = mountedButton.find(".location-button");
    expect(locationButton.text()).toEqual("All Locations");
  });
});
