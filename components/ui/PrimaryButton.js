import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={pressHandler}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
    elevation: 2,
  },
  buttonInnerContainer: {
    opacity: 1,
  },
  buttonText: {
    paddingVertical: 8,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
