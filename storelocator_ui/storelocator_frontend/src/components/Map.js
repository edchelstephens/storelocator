import "./Map.css";

const Map = (props) => {
  let imageFolder = "/static/storelocator_ui/img";

  let imagePath = props.imageName
    ? `${imageFolder}/${props.imageName}`
    : `${imageFolder}/none.png`;

  return (
    <div className="mapbox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
};

export default Map;
