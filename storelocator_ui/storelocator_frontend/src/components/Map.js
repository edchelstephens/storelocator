import "./Map.css";

const Map = (props) => {
  let imagePath = props.imageName
    ? `/static/storelocator_ui/img/${props.imageName}`
    : "/static/storelocator_ui/img/none.png";

  return (
    <div className="mapbox">
      <img src={imagePath} alt={props.location} />
    </div>
  );
};

export default Map;
