import "./Map.css";

const Map = (props) => {
  let imagePath = props.imageName
    ? `images/${props.imageName}`
    : "images/none.jpg";
  return (
    <div className="mapbox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
};

export default Map;
