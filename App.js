import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function onPickNumber(number) {
    setUserNumber(number);
  }

  let screen = <StartGameScreen onPickNumber={onPickNumber} />;

  if (userNumber) {
    screen = <GameScreen chosenNumber={userNumber} />;
  }

  return (

      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={{ flex: 1 }}>
        <StatusBar style="light" />
        <ImageBackground
          source={require("./assets/images/dices.jpg")}
          resizeMode="cover"
          style={{ flex: 1 }}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = new StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
