import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const MainCard = () => {
  const [selectedCards, setSelectedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCardPress = (index) => {
    const newSelectedCards = [...selectedCards];
    newSelectedCards[index] = !selectedCards[index];
    setSelectedCards(newSelectedCards);
  };

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
      top: 15,
    },
    smallCardTwo: {
      display: "flex",
      width: 70,
      height: 155,
      left: 110,
      gap: 25,
      top: -140,
    },
    smallCardThree: {
      display: "flex",
      width: 70,
      height: 155,
      left: 200,
      gap: 25,
      top: -295,
    },
    smallCardfour: {
      display: "flex",
      width: 70,
      height: 155,
      left: 280,
      gap: 25,
      top: -450,
    },
    temperatureText: {
      color: "white",
      fontSize: 18,
    },
    cardSelected: {
      position: "relative",
      alignItems: "center",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#6CD4FF",
      width: 55,
    },
  });
  return (
    <View style={styles.cardPrimary}>
      <View style={styles.cardTitle}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: 700 }}>
          Today
        </Text>
        <Text style={{ color: "white", fontSize: 17, fontWeight: 400 }}>
          Mar, 10
        </Text>
      </View>

      <TouchableOpacity onPress={() => handleCardPress(0)}>
        <View
          style={[styles.smallCard, selectedCards[0] && styles.cardSelected]}
        >
          <Text style={styles.temperatureText}>31°C</Text>
          <Feather name="sun" size={35} color="orange" />
          <Text style={{ color: "white", fontSize: 18 }}>07:00</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCardPress(1)}>
        <View
          style={[styles.smallCardTwo, selectedCards[1] && styles.cardSelected]}
        >
          <Text style={styles.temperatureText}>28°C</Text>
          <Ionicons name="partly-sunny" size={35} color="white" />
          <Text style={{ color: "white", fontSize: 18 }}>10:00</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCardPress(2)}>
        <View
          style={[
            styles.smallCardThree,
            selectedCards[2] && styles.cardSelected,
          ]}
        >
          <Text style={styles.temperatureText}>28°C</Text>
          <Feather name="sun" size={35} color="orange" />
          <Text style={{ color: "white", fontSize: 18 }}>11:00</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCardPress(3)}>
        <View
          style={[
            styles.smallCardfour,
            selectedCards[3] && styles.cardSelected,
          ]}
        >
          <Text style={styles.temperatureText}>26°C</Text>
          <FontAwesome5 name="cloud-sun-rain" size={35} color="white" />
          <Text style={{ color: "white", fontSize: 18 }}>18:00</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainCard;
