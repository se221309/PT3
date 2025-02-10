import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import QuizScreen from "./src/screens/QuizScreen";
import DashboardTabs from "./src/screens/DashboardTabs"; // Dashboard & Leaderboard als Swipe-Tab

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardTabs} // Dashboard & Leaderboard per Swipe
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
