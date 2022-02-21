function mapChooser(locationName) {
  if (!locationName) {
    locationName = "none";
  }

  locationName = locationName.toLowerCase();

  return `${locationName}.png`;
}
export default mapChooser;
