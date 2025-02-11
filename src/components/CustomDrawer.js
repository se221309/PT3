import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { styles } from "../styles/globalStyles";

const CustomDrawer = ({ navigation }) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <Text style={styles.drawerHeader}>Menü</Text>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("DashboardTabs")}>
        <Text style={styles.drawerText}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.drawerText}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.drawerText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
