import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,  // 🔄 Größer wie in Version 1
    fontWeight: "bold",
    color: "#7e3ff2",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "serif",  // 🔄 Schriftstil aus Version 1
  },
  subtitle: {
    fontSize: 20,  // 🔄 Größe anpassen
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#7e3ff2",  // 🔄 Lila Hintergrund (wie in Version 1)
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#ffffff",  // 🔄 Weißer Text
    fontSize: 18,  // 🔄 Schriftgröße aus Version 1
    fontWeight: "bold",
    fontFamily: "serif",  // 🔄 Kursive Serif-Schrift wie vorher
  },
  leaderboardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: 12,
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rank: {
    fontSize: 20,  // 🔄 Größer für bessere Sichtbarkeit
    fontWeight: "bold",
    color: "#333",
  },
  name: {
    fontSize: 20,  // 🔄 Wieder größer wie in Version 1
    color: "#333",
    flex: 1,
  },
  score: {
    fontSize: 20,  // 🔄 Wieder größer
    fontWeight: "bold",
    color: "#333",
  },
});

export default globalStyles;
