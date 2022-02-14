import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an image file name based on input given to it", () => {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });
});
