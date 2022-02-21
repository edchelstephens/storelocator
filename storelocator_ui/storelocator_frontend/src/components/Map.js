import "./Map.css";

import imagesSettings from "../images";

const Map = (props) => {
  let imagePath = props.imageName
    ? `${imagesSettings.directory}/${props.imageName}`
    : `${imagesSettings.directory}/none.png`;

  return (
    <div className="mapbox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
};

export default Map;
