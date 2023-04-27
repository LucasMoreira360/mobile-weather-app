import Entypo from "react-native-vector-icons/Entypo";
import React from "react";
import { View, Text } from "react-native";

const MyIconWithText = ({ iconName, iconSize, iconColor, text }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Entypo name={iconName} size={iconSize} color={iconColor} />
      <Text style={{ color: iconColor, marginLeft: 5 }}>{text}</Text>
    </View>
  );
};

export default MyIconWithText;
