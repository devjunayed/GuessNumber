import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "rgb(129, 5, 67)" }}
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
    backgroundColor: "rgb(141, 6, 73)",
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
