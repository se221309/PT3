import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/profileStyles"; // Korrekte Einbindung

const ProfileScreen = ({ navigation }) => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Lade den UserType aus dem Speicher
    const loadUserType = async () => {
      const storedUserType = await AsyncStorage.getItem("userType");
      setUserType(storedUserType || "lehrling"); // Falls kein Wert existiert, Standardwert "lehrling"
    };
    loadUserType();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mein Profil</Text>
      <View style={styles.profileBox}>
        <Text style={styles.profileText}>Angemeldet als:</Text>
        <Text style={styles.userRole}>{userType === "ausbilder" ? "Ausbilder" : "Lehrling"}</Text>
      </View>

      {/* Falls der Benutzer ein Ausbilder ist, zeige zusätzliche Optionen */}
      {userType === "ausbilder" && (
        <View style={styles.extraOptions}>
          <TouchableOpacity style={styles.optionButton} onPress={() => alert("Lehrlingsverwaltung kommt bald!")}>
            <Text style={styles.optionText}>Verwalte deine Lehrlinge</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => alert("Fragenverwaltung kommt bald!")}>
            <Text style={styles.optionText}>Fragenverwaltung</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard", params: { userType } }],
          })
        }
      >
        <Text style={styles.buttonText}>Zurück zum Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
