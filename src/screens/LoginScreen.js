import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import für Speicherung
import { authStyles } from "../styles/authStyles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded Benutzer (nur für Testzwecke)
  const users = {
    ausbilder: "passwort123",
    lehrling: "passwort456",
  };

  const handleLogin = async () => {
    if (users[username.toLowerCase()] && users[username.toLowerCase()] === password) {
      const userType = username.toLowerCase() === "ausbilder" ? "ausbilder" : "lehrling";

      try {
        await AsyncStorage.setItem("userType", userType); // Speichern des Benutzer-Typs
        navigation.replace("Dashboard"); // Navigieren ohne zurückkehren zu können
      } catch (error) {
        Alert.alert("Fehler", "Benutzerrolle konnte nicht gespeichert werden.");
      }
    } else {
      Alert.alert("Fehler", "Benutzername oder Passwort falsch!");
    }
  };

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.logoText}>Learn</Text>

      <View style={authStyles.authContainer}>
        <View style={authStyles.tabContainer}>
          <Text style={[authStyles.tab, authStyles.activeTab]}>Log In</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={authStyles.tab}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text>Benutzername:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Benutzername"
          value={username}
          onChangeText={setUsername}
        />

        <Text>Passwort:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Passwort"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={authStyles.button} onPress={handleLogin}>
          <Text style={authStyles.buttonText}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
