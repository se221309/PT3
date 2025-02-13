import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { drawerStyles } from "../styles/drawerStyles"; // Neue Styles importieren

export default function CustomDrawer(props) {
  const { userType } = props; // Unterscheidung zwischen Lehrling und Ausbilder

  return (
    <View style={drawerStyles.drawerContainer}>
      {/* Benutzerinfo */}
      <View style={drawerStyles.userInfo}>
        <Text style={drawerStyles.userName}>Laurenz Kofler</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <TouchableOpacity style={drawerStyles.drawerItem} onPress={() => props.navigation.navigate("Profile")}>
          <Text style={drawerStyles.drawerItemText}>Meine Daten</Text>
        </TouchableOpacity>

        <TouchableOpacity style={drawerStyles.drawerItem} onPress={() => props.navigation.navigate("Settings")}>
          <Text style={drawerStyles.drawerItemText}>Einstellungen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={drawerStyles.drawerItem} onPress={() => props.navigation.navigate("Statistics")}>
          <Text style={drawerStyles.drawerItemText}>Statistik</Text>
        </TouchableOpacity>

        {/* Extra-Menüpunkte für den Ausbilder */}
        {userType === "ausbilder" && (
          <>
            <TouchableOpacity style={drawerStyles.drawerItem} onPress={() => props.navigation.navigate("Fragenverwaltung")}>
              <Text style={drawerStyles.drawerItemText}>Fragenverwaltung</Text>
            </TouchableOpacity>

            <TouchableOpacity style={drawerStyles.drawerItem} onPress={() => props.navigation.navigate("Lehrlingsverwaltung")}>
              <Text style={drawerStyles.drawerItemText}>Lehrlingsverwaltung</Text>
            </TouchableOpacity>
          </>
        )}
      </DrawerContentScrollView>

      {/* Logout-Button unten */}
      <TouchableOpacity style={drawerStyles.logoutButton} onPress={() => props.navigation.navigate("Login")}>
        <Text style={drawerStyles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
