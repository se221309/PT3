import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./src/components/CustomDrawer";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import QuizScreen from "./src/screens/QuizScreen";
import DashboardScreen from "./src/screens/DashboardScreen"; // Dashboard

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigation
const DrawerNavigator = ({ route }) => {
  const { userType } = route.params || { userType: "lehrling" }; // Default ist Lehrling

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} userType={userType} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="DashboardScreen">
        {props => <DashboardScreen {...props} userType={userType} />}
      </Drawer.Screen>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
