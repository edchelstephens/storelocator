import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="location-button"
      onClick={props.onClick}
      value={props.location}
    >
      {props.location ? props.location : "All Locations"}
    </button>
  );
};

export default Button;
