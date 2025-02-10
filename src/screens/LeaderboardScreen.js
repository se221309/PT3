import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";

const LeaderboardScreen = () => {
  const leaderboardData = [
    { name: "Sophie L.", score: "14.000", rank: 1 },
    { name: "Leon M.", score: "13.800", rank: 2 },
    { name: "Max B.", score: "13.500", rank: 3 },
    { name: "Sarah K.", score: "13.200", rank: 4 },
    { name: "Alex J.", score: "12.900", rank: 5 },
    { name: "Nina F.", score: "12.600", rank: 6 },
    { name: "Lukas P.", score: "12.300", rank: 7 },
    { name: "Mia W.", score: "12.000", rank: 8 },
    { name: "Felix D.", score: "11.800", rank: 9 },
    { name: "Hanna G.", score: "11.600", rank: 10 },
    { name: "Chris T.", score: "11.500", rank: 11 }, // Extra Personen für Tests
    { name: "Anna M.", score: "11.400", rank: 12 },
    { name: "David R.", score: "11.300", rank: 13 },
    { name: "Sophia K.", score: "11.200", rank: 14 },
    { name: "Maximilian H.", score: "11.100", rank: 15 },
  ];

  return (
    <ScrollView style={styles.leaderboardContainer}>
      <Text style={styles.headerText}>Schülerliste</Text>
      {leaderboardData.map((player, index) => (
        <View
          key={index}
          style={[
            styles.leaderboardItem,
            player.rank === 1
              ? styles.gold
              : player.rank === 2
              ? styles.silver
              : player.rank === 3
              ? styles.bronze
              : styles.defaultRank,
          ]}
        >
          <Text style={styles.rank}>{player.rank}</Text>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerScore}>{player.score}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LeaderboardScreen;
