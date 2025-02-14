import { StyleSheet } from "react-native";

export const questionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0B29",
    padding: 20,
    marginTop: 40,
  },
  scrollContainer: {
    paddingBottom: 80, // Extra Platz für Buttons
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1C1C3A",
    color: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#A020F0",
  },
  picker: {
    width: "100%",
    backgroundColor: "#1C1C3A",
    color: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#A020F0",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  backButton: {
    marginTop: 20,
    backgroundColor: "#A020F0",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
