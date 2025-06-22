import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
