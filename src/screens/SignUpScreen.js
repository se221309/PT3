import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authStyles } from "../styles/authStyles";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={authStyles.container}>
      <Text style={authStyles.logoText}>Learn</Text>

      <View style={authStyles.authContainer}>
        <View style={authStyles.tabContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={authStyles.tab}>Log In</Text>
          </TouchableOpacity>
          <Text style={[authStyles.tab, authStyles.activeTab]}>Sign Up</Text>
        </View>

        <Text>E-Mail:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="E-Mail"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Username:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <Text>Password:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text>Password wiederholen:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Passwort wiederholen"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={authStyles.button} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={authStyles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
