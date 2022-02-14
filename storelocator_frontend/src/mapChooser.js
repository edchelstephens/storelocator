function mapChooser(locationName) {
  if (locationName === undefined) {
    locationName = "default";
  }

  return `${locationName}.jpg`;
}
export default mapChooser;
