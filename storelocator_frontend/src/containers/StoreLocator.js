import { useState } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

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

  const storeButtons = shops.map((shop) => {
    return <Button location={shop.location} key={shop.address} />;
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
