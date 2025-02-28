import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0B29",
    padding: 20,
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  timerContainer: {
    height: 8,
    width: "100%",
    backgroundColor: "#444",
    borderRadius: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
  timerBar: {
    height: "100%",
    backgroundColor: "green",
  },
  optionButton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedAnswer: {
    backgroundColor: "#B0B0B0",
    borderColor: "#8F8F8F",
  },
  correctAnswer: {
    backgroundColor: "#008000", // Richtige Antwort in Grün
  },
  wrongAnswer: {
    backgroundColor: "#FF4C4C", // Falsche Antwort in Rot
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    marginBottom: 10,
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: "#A020F0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  feedbackText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  questionImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  
});
