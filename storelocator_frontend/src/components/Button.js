import "./Button.css";

const Button = (props) => {
  return (
    <button className="location-button">
      {props.location ? props.location : "All Locations"}
    </button>
  );
};

export default Button;
