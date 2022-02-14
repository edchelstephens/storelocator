import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an image based on the location name passed to it", () => {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns default.jpg when no location is passed to it", () => {
    let expected = "default.jpg";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
