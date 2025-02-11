import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0B29",
    padding: 20,
    justifyContent: "center",
  },

  /* Timer für den Duellmodus */
  timer: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4500",
    textAlign: "center",
    marginBottom: 20,
  },

  /* Frage Text */
  questionText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
  },

  /* Multiple Choice Buttons */
  optionButton: {
    backgroundColor: "#2E2E2E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#A020F0",
  },
  optionText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  /* Multiple Choice Grid */
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#2E2E2E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  /* Text Input */
  textInput: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    color: "#000000",
    marginBottom: 20,
  },

  /* Weiter-Button */
  nextButton: {
    backgroundColor: "#A020F0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
