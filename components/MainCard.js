import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const MainCard = (props) => {
  const styles = StyleSheet.create({
    cardPrimary: {
      display: "flex",
      backgroundColor: "#0096C7",
      width: 343,
      height: 217,
      marginTop: -5,
      left: 4,
      borderRadius: 20,
    },
    cardTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      gap: 200,
      marginTop: 10,
      marginLeft: 0,
    },
    smallCard: {
      display: "flex",
      width: 70,
      height: 155,
      left: 20,
      gap: 25,
      top: 5,
    },
    smallCardTwo: {
      display: "flex",
      width: 70,
      height: 155,
      left: 110,
      gap: 25,
      top: -150,
    },
    smallCardThree: {
      display: "flex",
      width: 70,
      height: 155,
      left: 200,
      gap: 25,
      top: -305,
    },
    smallCardfour: {
      display: "flex",
      width: 70,
      height: 155,
      left: 280,
      gap: 25,
      top: -460,
    },
    temperatureText: {
      color: "white",
      fontSize: 18,
    },
  });
  return (
    <View style={styles.cardPrimary}>
      <View style={styles.cardTitle}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: 700 }}>
          Today
        </Text>
        <Text style={{ color: "white", fontSize: 15, fontWeight: 400 }}>
          Mar, 10
        </Text>
      </View>
      <View style={styles.smallCard}>
        <Text style={styles.temperatureText}>31°C</Text>
        <Feather name="sun" size={35} color="orange" />
        <Text style={{ color: "white", fontSize: 18 }}>07:00</Text>
      </View>

      <View style={styles.smallCardTwo}>
        <Text style={styles.temperatureText}>28°C</Text>
        <Ionicons name="partly-sunny" size={35} color="white" />
        <Text style={{ color: "white", fontSize: 18 }}>10:00</Text>
      </View>

      <View style={styles.smallCardThree}>
        <Text style={styles.temperatureText}>28°C</Text>
        <Feather name="sun" size={35} color="orange" />
        <Text style={{ color: "white", fontSize: 18 }}>11:00</Text>
      </View>

      <View style={styles.smallCardfour}>
        <Text style={styles.temperatureText}>26°C</Text>
        <FontAwesome5 name="cloud-sun-rain" size={35} color="white" />
        <Text style={{ color: "white", fontSize: 18 }}>18:00</Text>
      </View>
    </View>
  );
};

export default MainCard;
