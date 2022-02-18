import { useState, Component } from "react";

import axios from "axios";

import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";

import mapChooser from "../mapChooser";

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: "none.png",
      shops: [],
    };

    this.shops = [
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

    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get("http://localhost:3000/data/shops.json");
  }
  chooseMap(e) {
    this.setState({ currentMap: mapChooser(e.target.value) });
  }

  render() {
    let storeButtons = this.state.shops.map((shop) => {
      return (
        <Button
          onClick={this.chooseMap}
          key={shop.location}
          location={shop.location}
        />
      );
    });

    return (
      <div>
        <Header />
        <div>{storeButtons}</div>
        <Map imageName={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

const StoreLocatorFunctionalComponent = ({ location }) => {
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
