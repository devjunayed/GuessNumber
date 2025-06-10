import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
        source={require("./assets/images/dices.jpg")}
      >
        <StartGameScreen />
        <StatusBar style="light" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = new StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
