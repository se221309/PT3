import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashboardScreen from "./DashboardScreen";
import LeaderboardScreen from "./LeaderboardScreen";

const Tab = createMaterialTopTabNavigator();

const DashboardTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: "#7e3ff2" },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: "#F9F9F9" },
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Tab.Navigator>
  );
};

export default DashboardTabs;
