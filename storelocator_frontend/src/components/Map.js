import "./Map.css";

const Map = (props) => {
  console.log("Map props:", props);
  let imagePath = props.imageName
    ? `images/${props.imageName}`
    : "images/none.png";

  return (
    <div className="mapbox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
};

export default Map;
