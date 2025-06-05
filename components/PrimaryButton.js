import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;


const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgb(141, 6, 73)",
    borderRadius: 28,
    paddingVertical: 8,
    margin: 4,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})