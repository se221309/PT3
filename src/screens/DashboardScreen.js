import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Profile")}>
        <Text style={globalStyles.buttonText}>Mein Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Categories")}>
        <Text style={globalStyles.buttonText}>Fragen Lernen</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default DashboardScreen;
