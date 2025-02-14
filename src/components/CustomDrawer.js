import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { drawerStyles } from "../styles/drawerStyles";

export default function CustomDrawer(props) {
  const { navigation } = props;
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // `userType` aus AsyncStorage abrufen
    const fetchUserType = async () => {
      try {
        const storedUserType = await AsyncStorage.getItem("userType");
        if (storedUserType) {
          setUserType(storedUserType);
        }
      } catch (error) {
        console.error("Fehler beim Abrufen des UserType:", error);
      }
    };
    fetchUserType();
  }, []);

  return (
    <View style={drawerStyles.drawerContainer}>
      {/* Benutzerinfo */}
      <View style={drawerStyles.userInfo}>
        <Text style={drawerStyles.userName}>Laurenz Kofler</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={drawerStyles.drawerItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={drawerStyles.drawerItemText}>Mein Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={drawerStyles.drawerItem}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={drawerStyles.drawerItemText}>Einstellungen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={drawerStyles.drawerItem}
          onPress={() => navigation.navigate("Statistics")}
        >
          <Text style={drawerStyles.drawerItemText}>Statistik</Text>
        </TouchableOpacity>

        {/* Extra-Menüpunkte für den Ausbilder */}
        {userType === "ausbilder" && (
          <>
            <TouchableOpacity
              style={drawerStyles.drawerItem}
              onPress={() => navigation.navigate("Fragenverwaltung")}
            >
              <Text style={drawerStyles.drawerItemText}>Fragenverwaltung</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={drawerStyles.drawerItem}
              onPress={() => navigation.navigate("Lehrlingsverwaltung")}
            >
              <Text style={drawerStyles.drawerItemText}>Lehrlingsverwaltung</Text>
            </TouchableOpacity>
          </>
        )}
      </DrawerContentScrollView>

      {/* Logout-Button unten */}
      <TouchableOpacity
        style={drawerStyles.logoutButton}
        onPress={async () => {
          await AsyncStorage.removeItem("userType"); // UserType zurücksetzen
          navigation.navigate("Login");
        }}
      >
        <Text style={drawerStyles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
