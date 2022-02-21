import imagesSettings from "../images";

const Header = () => {
  let imagePath = `${imagesSettings.directory}/wired-brain-coffee-logo.png`;
  return (
    <div className="header">
      <img src={imagePath} alt="Wired Brain" />
    </div>
  );
};

export default Header;
