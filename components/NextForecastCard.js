import { StyleSheet, Text, View } from "react-native";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";

const NextForecastCard = (props) => {
  const styles = StyleSheet.create({
    cardPrimary: {
      display: "flex",
      backgroundColor: "#0096C7",
      width: 343,
      height: 151,
      marginTop: 17,
      left: 4,
      borderRadius: 20,
    },
    cardTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      gap: 170,
      marginTop: 10,
      marginLeft: 10,
    },
    smallCard: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 70,
      height: 155,
      left: 20,
      gap: 80,
      top: 15,
    },
    smallCardTwo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: 70,
      height: 155,
      left: 20,
      gap: 80,
      top: -90,
    },

    temperatureText: {
      color: "white",
      fontWeight: 700,
      fontSize: 17,
    },
  });
  return (
    <View style={styles.cardPrimary}>
      <View style={styles.cardTitle}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: 700 }}>
          Next Forecast
        </Text>
        <Text style={{ color: "white", fontSize: 15, fontWeight: 400 }}>
          <Feather name="calendar" size={24} color="white" />
        </Text>
      </View>
      <View style={styles.smallCard}>
        <Text style={styles.temperatureText}>Monday</Text>
        <Entypo name="water" size={35} color="white" />
        <Text style={{ color: "white", fontSize: 13 }}>13°C 10°C</Text>
      </View>

      <View style={styles.smallCardTwo}>
        <Text style={styles.temperatureText}>Tuesday</Text>
        <FontAwesome5 name="cloud-sun-rain" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 13 }}>17°C 12°C</Text>
      </View>
    </View>
  );
};

export default NextForecastCard;
