import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import MyIconWithText from "./components/components-personalizado/MyIconWithText";
import MyIconWithTemperature from "./components/components-personalizado/MyIconWithTemperature";
import MyIconWithWind from "./components/components-personalizado/MyIconWithWind";
import MainCard from "./components/MainCard";
import NextForecastCard from "./components/NextForecastCard";
import axiosInstance from "./helper/axios-instance";

export default function App() {
  const [currentTemperature, setCurrentTemperature] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("weather")
      .then((res) => setCurrentTemperature(res.data.results))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <ScrollView>
      <View>
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
            <Text style={styles.temperatureText}>
              {currentTemperature.temp}
            </Text>
            <Text style={[styles.temperatureText, { fontSize: 70 }]}>°</Text>
          </View>
          <View style={styles.precipitationStyle}>
            <Text style={{ color: "white" }}>Precipitations</Text>
          </View>
          <View style={styles.precipitationTemperature}>
            <Text style={{ color: "white" }}>
              Max: {currentTemperature.temp} ° Min: {currentTemperature.temp} °
            </Text>
          </View>
          <View style={styles.containerInfoIcons}>
            <View style={styles.icons}>
              <MyIconWithText
                iconName="water"
                iconSize={20}
                iconColor="white"
                text="18%"
              />
              <MyIconWithTemperature
                iconName="temperature-low"
                iconSize={20}
                iconColor="white"
                text="67%"
              />
              <MyIconWithTemperature
                iconName="wind"
                iconSize={20}
                iconColor="white"
                text="25 km/h"
              />
            </View>
          </View>
          <View>
            <MainCard />
            <NextForecastCard />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
