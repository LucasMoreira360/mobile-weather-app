import FontAwesome5 from "react-native-vector-icons/Entypo";
import React from "react";
import { View, Text } from "react-native";

const MyIconWithWind = ({ iconName, iconSize, iconColor, text }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
      <Text style={{ color: iconColor, marginLeft: 5 }}>{text}</Text>
    </View>
  );
};

export default MyIconWithWind;
