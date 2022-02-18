import { useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

import mapChooser from "../mapChooser";

const StoreLocator = ({ location }) => {
  const [currentMap, setCurrentMap] = useState("none.png");
  const shops = [
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
  ];

  const chooseMap = (e) => {
    setCurrentMap(mapChooser(e.target.value));
  };

  const storeButtons = shops.map((shop) => {
    return (
      <Button onClick={chooseMap} location={shop.location} key={shop.address} />
    );
  });

  return (
    <div>
      <Header />
      <div>{storeButtons}</div>
      <Map imageName={currentMap} location={location} />
    </div>
  );
};

export default StoreLocator;
