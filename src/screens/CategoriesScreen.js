import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Themenfelder</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Quiz")}>
        <Text style={globalStyles.buttonText}>Elektrotechnik</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Quiz")}>
        <Text style={globalStyles.buttonText}>Material- & Werkstoffe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Quiz")}>
        <Text style={globalStyles.buttonText}>SPS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesScreen;
