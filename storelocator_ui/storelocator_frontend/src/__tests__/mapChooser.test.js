import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an image based on the location name passed to it", () => {
    let expected = "portland.png";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns none.jpg when no location is passed to it", () => {
    let expected = "none.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
