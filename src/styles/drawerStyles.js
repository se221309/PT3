import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingVertical: 20,
  },
  userInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  drawerItemText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#D32F2F",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
