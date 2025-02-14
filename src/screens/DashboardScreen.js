import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { styles } from "../styles/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const opponents = [
  { id: "1", name: "Sophie", score: "5 - 6" },
  { id: "2", name: "Leon", score: "3 - 2" },
  { id: "3", name: "Max", score: "4 - 8" },
  { id: "4", name: "Sophia", score: "7 - 5" },
];

const singlePlayerGames = [
  { id: "1", score: "98%" },
  { id: "2", score: "97%" },
  { id: "3", score: "95%" },
];

const learningSections = [
  { id: "1", title: "Elektrotechnik", progress: "20 / 47", percent: "43%", color: "#FF0000" },
  { id: "2", title: "Material- & Werkstoffe", progress: "4 / 10", percent: "40%", color: "#0066CC" },
  { id: "3", title: "SPS", progress: "2 / 3", percent: "66%", color: "#008000" },
];

export default function DashboardScreen({ route, navigation }) {
  const [userType, setUserType] = useState("lehrling"); // Standardmäßig "lehrling"

  // Beim Laden des Screens den UserType abrufen
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const storedUserType = await AsyncStorage.getItem("userType");
        if (storedUserType) {
          setUserType(storedUserType);
        }
      } catch (error) {
        console.log("Fehler beim Abrufen des userType:", error);
      }
    };
    fetchUserType();
  }, []);

  // Falls userType beim Navigieren übergeben wird, speichern wir ihn
  useEffect(() => {
    if (route.params?.userType) {
      setUserType(route.params.userType);
      AsyncStorage.setItem("userType", route.params.userType);
    }
  }, [route.params?.userType]);

  return (
    <View style={styles.screenContainer}>
      {/* Menü-Button für Drawer */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Inhalt unterhalb des Headers */}
      <ScrollView style={styles.dashboardContainer} showsVerticalScrollIndicator={false}>
        {/* Streak-Container */}
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>Dein Streak:</Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#FF4500" }}>4 🔥</Text>
          <View style={styles.streakDots}>
            {[...Array(4)].map((_, index) => (
              <View key={index} style={styles.dot} />
            ))}
          </View>
        </View>

        {/* Modus wählen */}
        <Text style={styles.sectionHeader}>Modus wählen</Text>

        {/* Duell */}
        <Text style={styles.subHeader}>Duell:</Text>
        <TouchableOpacity 
          style={styles.gameMode}
          onPress={() => navigation.navigate("Quiz", { mode: "duel", userType })}
        >
          <Text style={styles.gameModeText}>Neues Spiel starten</Text>
        </TouchableOpacity>

        <FlatList
          horizontal
          data={opponents}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
          renderItem={({ item }) => (
            <View style={styles.opponentCard}>
              <Text style={styles.opponentName}>{item.name}</Text>
              <Text style={styles.opponentScore}>{item.score}</Text>
              <TouchableOpacity 
                style={styles.playButton}
                onPress={() => navigation.navigate("Quiz", { mode: "duel", userType })}
              >
                <Text style={styles.playButtonText}>Spielen</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Einzelspiel */}
        <Text style={styles.subHeader}>Einzelspiel:</Text>
        <TouchableOpacity 
          style={styles.gameMode}
          onPress={() => navigation.navigate("Quiz", { mode: "single", userType })}
        >
          <Text style={styles.gameModeText}>Neues Spiel starten</Text>
        </TouchableOpacity>

        <FlatList
          horizontal
          data={singlePlayerGames}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
          renderItem={({ item }) => (
            <View style={styles.singleGameCard}>
              <Text style={styles.singleGameScore}>{item.score}</Text>
              <TouchableOpacity 
                style={styles.playButton}
                onPress={() => navigation.navigate("Quiz", { mode: "single", userType })}
              >
                <Text style={styles.playButtonText}>Spielen</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Lernfortschritt */}
        <Text style={styles.sectionHeader}>Lernfortschritt:</Text>
        {learningSections.map((item) => (
          <View key={item.id} style={[styles.learningItem, { borderLeftColor: item.color }]}>
            <Text style={styles.learningTitle}>{item.title}</Text>
            <Text style={styles.learningStats}>{item.progress} {item.percent}</Text>
          </View>
        ))}

        {/* Extra-Funktion für den Ausbilder */}
        {userType === "ausbilder" && (
          <TouchableOpacity style={styles.gameMode} onPress={() => navigation.navigate("Fragenverwaltung", { userType })}>
            <Text style={styles.gameModeText}>Fragenverwaltung</Text>
          </TouchableOpacity>
        )}

      </ScrollView>
    </View>
  );
}
