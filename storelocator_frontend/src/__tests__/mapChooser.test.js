import mapChooser from "../mapChooser";

describe("mapChooser", () => {
  it("returns an portland.jpg when portland is passed to it", () => {
    let expected = "portland.jpg";
    let actual = mapChooser("portland");
    expect(actual).toEqual(expected);
  });

  it("returns astoria.jpg when astoria is passed to it", () => {
    let expected = "astoria.jpg";
    let actual = mapChooser("astoria");
    expect(actual).toEqual(expected);
  });
});
