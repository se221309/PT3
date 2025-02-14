import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "./src/components/CustomDrawer";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import QuizScreen from "./src/screens/QuizScreen";
import DashboardTabs from "./src/screens/DashboardTabs"; 
import QuestionsManagementScreen from "./src/screens/QuestionsManagementScreen"; // Neue Fragenverwaltung

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // State für userType (Lehrling oder Ausbilder)
  const [userType, setUserType] = useState("lehrling"); // Standard: Lehrling

  // **Drawer Navigation**
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} userType={userType} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="DashboardTabs">
          {(props) => <DashboardTabs {...props} userType={userType} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile">
          {(props) => <ProfileScreen {...props} userType={userType} />}
        </Drawer.Screen>

        {/* Fragenverwaltung nur für den Ausbilder sichtbar */}
        {userType === "ausbilder" && (
          <Drawer.Screen name="Fragenverwaltung">
            {(props) => <QuestionsManagementScreen {...props} userType={userType} />}
          </Drawer.Screen>
        )}
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          options={{ headerShown: false }}
        >
          {(props) => <LoginScreen {...props} setUserType={setUserType} />}
        </Stack.Screen>
        
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
          {() => <DrawerNavigator />}
        </Stack.Screen>
        
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile">
          {(props) => <ProfileScreen {...props} userType={userType} />}
        </Stack.Screen>

        {/* Fragenverwaltung für Stack-Navigation */}
        <Stack.Screen name="Fragenverwaltung" options={{ headerShown: false }}>
          {(props) => <QuestionsManagementScreen {...props} userType={userType} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
