import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authStyles } from "../styles/authStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <Text>E-Mail / Username:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="E-Mail / Username"
          value={email}
          onChangeText={setEmail}
        />

        <Text>Password:</Text>
        <TextInput
          style={authStyles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={authStyles.button} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={authStyles.buttonText}>Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
