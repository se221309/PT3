import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Mein Profil</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Dashboard")}> 
        <Text style={globalStyles.buttonText}>Zurück zum Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
