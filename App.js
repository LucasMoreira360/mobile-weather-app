import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { Feather, EvilIcons, Ionicons } from "@expo/vector-icons";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTemperature, setCurrentTemperature] = useState("30");
  const [location, setLocation] = useState("BR, Itatiba");

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
  });

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <EvilIcons name="location" size={30} color="white" />
      </View>
      <View style={styles.notification}>
        <Ionicons name="notifications-outline" size={25} color="white" />
      </View>

      <Image
        source={require("./images/ImageSun.png")}
        style={styles.ImageSunStyle}
      />

      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText, { fontSize: 70 }]}>°</Text>
      </View>
    </View>
  );
}
