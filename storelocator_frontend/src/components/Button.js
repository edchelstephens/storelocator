import "./Button.css";

const Button = (props) => {
  return (
    <button className="location-button" onClick={props.handleClick}>
      {props.location ? props.location : "All Locations"}
    </button>
  );
};

export default Button;
