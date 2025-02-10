import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashboardScreen from "./DashboardScreen";
import LeaderboardScreen from "./LeaderboardScreen";

const Tab = createMaterialTopTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: "none" }, // Tab-Leiste verstecken
        swipeEnabled: true, // Ermöglicht Swipe-Navigation
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
