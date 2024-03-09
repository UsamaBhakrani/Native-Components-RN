import { StyleSheet, View } from "react-native";
import ColorCounter from "./ColorCounter";
import { useState } from "react";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const counterIncrease = 10;

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + counterIncrease)}
        onDecrease={() => setRed(red - counterIncrease)}
        name="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + counterIncrease)}
        onDecrease={() => setGreen(green - counterIncrease)}
        name="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + counterIncrease)}
        onDecrease={() => setBlue(blue - counterIncrease)}
        name="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
