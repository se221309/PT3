import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/profileStyles"; // Korrekte Einbindung

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mein Profil</Text>
      <TouchableOpacity 
  style={styles.button} 
  onPress={() => navigation.reset({
    index: 0,
    routes: [{ name: "Dashboard" }],
  })}
>
  <Text style={styles.buttonText}>Zurück zum Dashboard</Text>
</TouchableOpacity>


    </View>
  );
};

export default ProfileScreen;
