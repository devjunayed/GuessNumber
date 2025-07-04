import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ chosenNumber }) => {
  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  function nextGuessHandler(){
    if(direction === 'lower'){
      maxBoundary = currentGuess - 1;
      generateRandomBetween();
    }
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          {/* + */}
          <PrimaryButton onPress={() => {}}>+</PrimaryButton>
          {/* - */}
          <PrimaryButton onPress={() => {}}>-</PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
