import React, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import axiosInstance from "./service/axios-instance";
import MyIconWithText from "./components/MyIconWithText";
import MyIconWithTemperature from "./components/MyIconWithTemperature";
import MyIconWithWind from "./components/MyIconWithWind";
import MainCard from "./components/MainCard";
import NextForecastCard from "./components/NextForecastCard";
import styles from "./style";

export default function App() {
  const [currentTemperature, setCurrentTemperature] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const res = await axiosInstance.get("weather");
        setCurrentTemperature(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeatherData();
  }, []);

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
            <Text style={{ color: "white" }}>
              {currentTemperature.description}
            </Text>
          </View>
          <View style={styles.precipitationTemperature}>
            <Text style={{ color: "white" }}>Max: 26 ° Min: 16 °</Text>
          </View>
          <View style={styles.containerInfoIcons}>
            <View style={styles.icons}>
              <MyIconWithText
                iconName="water"
                iconSize={20}
                iconColor="white"
                text={`${currentTemperature.rain}%`}
              />
              <MyIconWithTemperature
                iconName="temperature-low"
                iconSize={20}
                iconColor="white"
                text={`${currentTemperature.humidity}%`}
              />
              <MyIconWithTemperature
                iconName="wind"
                iconSize={20}
                iconColor="white"
                text={`${currentTemperature.wind_speedy}`}
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
