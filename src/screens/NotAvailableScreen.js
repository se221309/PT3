import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const PlaceholderScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Funktion noch nicht verfügbar</Text>
      <Text style={globalStyles.text}>
        Dieses Feature ist derzeit noch in Entwicklung. Bitte später erneut versuchen!
      </Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={globalStyles.buttonText}>Zurück zum Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceholderScreen;
