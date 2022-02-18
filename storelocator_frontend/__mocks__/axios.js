const axiosMock = jest.genMockFromModule("axios");

let mockResponse = {
  data: {
    shops: [
      {
        location: "Portland",
        address: "123 Portland Dr",
      },
      {
        location: "Astoria",
        address: "123 Astoria Dr",
      },
      {
        location: "",
        address: "",
      },
    ],
  },
};

axiosMock.get.mockImplementation(req);

function req() {
  return new Promise(function (resolve) {
    axiosMock.delayTimer = setTimeout(function () {
      resolve(mockResponse);
    }, 100);
  });
}

module.exports = axiosMock;
