import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#29B2DD",
    alignItems: "center",
  },
  temperature: {
    alignItems: "center",
    flexDirection: "row",
    left: 20,
  },
  temperatureText: {
    color: "white",
    fontSize: 60,
    top: -30,
  },
  location: {
    position: "absolute",
    alignSelf: "flex-start",
    margin: 50,
  },
  notification: {
    position: "absolute",
    alignSelf: "flex-end",
    margin: 50,
    right: 3,
  },
  ImageSunStyle: {
    display: "flex",
    width: 284,
    height: 187,
    marginTop: 70,
    marginLeft: 30,
  },
  precipitationStyle: {
    alignSelf: "center",
    bottom: 40,
    left: 10,
  },
  precipitationTemperature: {
    alignSelf: "center",
    bottom: 40,
    left: 13,
  },
  containerInfoIcons: {
    display: "flex",
    backgroundColor: "#0096C7",
    width: 343,
    height: 47,
    top: -20,
    left: 4,
    borderRadius: 20,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    gap: 60,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default styles