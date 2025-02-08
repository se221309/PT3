import React from "react";
import { View, Text, FlatList } from "react-native";
import globalStyles from "../styles/globalStyles";

const leaderboardData = [
  { id: "1", name: "Max Mustermann", score: 1200, color: "#FFD700" }, // Gold
  { id: "2", name: "Lisa Müller", score: 1150, color: "#C0C0C0" }, // Silber
  { id: "3", name: "Tom Schmidt", score: 1100, color: "#CD7F32" }, // Bronze
  { id: "4", name: "Anna Bauer", score: 1050, color: "#FFFFFF" }, // Standard Weiß
  { id: "5", name: "Felix Becker", score: 1000, color: "#FFFFFF" },
];

const LeaderboardScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Leaderboard</Text>

      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[globalStyles.leaderboardRow, { backgroundColor: item.color }]}>
            <Text style={globalStyles.rank}>{index + 1}.</Text>
            <Text style={globalStyles.name}>{item.name}</Text>
            <Text style={globalStyles.score}>{item.score} Punkte</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LeaderboardScreen;
