import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Learn</Text>

      <TextInput placeholder="E-Mail / Username" style={globalStyles.input} />
      <TextInput placeholder="Passwort" secureTextEntry style={globalStyles.input} />

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={globalStyles.buttonText}>Login!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={globalStyles.link}>Noch kein Konto? Registrieren</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
