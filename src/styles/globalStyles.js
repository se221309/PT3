import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 30, // Sicherstellen, dass ALLES unter dem Menü beginnt
  },
  dashboardContainer: {
    flex: 1,
    backgroundColor: "#0F0B29",
    padding: 20,
    paddingBottom: 40,
    marginTop: 20,
  },

  fixedHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#0F0B29", // Gleich wie Dashboard Hintergrund
    justifyContent: "center",
    paddingHorizontal: 15,
    zIndex: 100, // Sicherstellen, dass der Button über allem liegt
  },
  
  menuButton: {
    position: "absolute",
    top: 10,
    left: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  streakContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 25,
  },
  streakText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  streakDots: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 15,
    height: 15,
    backgroundColor: "#A020F0",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 15,
  },
  horizontalScroll: {
    flexDirection: "row",
    marginBottom: 20,
  },
  opponentCard: {
    backgroundColor: "#A020F0",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginRight: 10,
    width: 100,
    marginTop: 10,
  },
  opponentName: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  opponentScore: {
    color: "#ffffff",
    fontSize: 14,
  },
  playButton: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 5,
  },
  playButtonText: {
    color: "#A020F0",
    fontWeight: "bold",
    fontSize: 14,
  },
  singleGameCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginRight: 10,
    width: 100,
    marginTop: 10,
  },
  singleGameScore: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gameMode: {
    backgroundColor: "#A020F0",
    padding: 12,
    borderRadius: 15,
    marginTop: 10,
    alignItems: "center",
  },
  gameModeText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  /* --- Fragen Lernen --- */
  learningItem: {
    backgroundColor: "#2E2E2E",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    borderLeftWidth: 8,
  },
  learningTitle: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  learningStats: {
    color: "#cccccc",
    fontSize: 16,
  },

  /* --- Leaderboard Styling --- */
  leaderboardContainer: {
    flex: 1,
    backgroundColor: "#0F0B29", // Hintergrund ans Dashboard anpassen
    padding: 20,
  },
  leaderboardItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  gold: { backgroundColor: "#FFD700" },
  silver: { backgroundColor: "#C0C0C0" },
  bronze: { backgroundColor: "#CD7F32" },
  defaultRank: { backgroundColor: "#ffffff" },

  rankBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  rank: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    flex: 1,
  },
  playerScore: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
});
