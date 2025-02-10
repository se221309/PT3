import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#6D28D9",
    marginBottom: 30,
    fontFamily: "serif",
  },
  authContainer: {
    width: "90%",
    backgroundColor: "#EAEAEA",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tab: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: "#A3A3A3",
  },
  activeTab: {
    color: "#2D2D2D",
    textDecorationLine: "underline",
  },
  input: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  button: {
    backgroundColor: "#6D28D9",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
