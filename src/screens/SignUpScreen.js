import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Registrieren</Text>

      <TextInput placeholder="E-Mail" style={globalStyles.input} />
      <TextInput placeholder="Username" style={globalStyles.input} />
      <TextInput placeholder="Passwort" secureTextEntry style={globalStyles.input} />
      <TextInput placeholder="Passwort wiederholen" secureTextEntry style={globalStyles.input} />

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Dashboard")}>
        <Text style={globalStyles.buttonText}>Sign Up!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={globalStyles.link}>Bereits registriert? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
