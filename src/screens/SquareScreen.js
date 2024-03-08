import { StyleSheet, View } from "react-native";
import ColorCounter from "./ColorCounter";
import ColorScreen from "./ColorScreen";
import { useState } from "react";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        name="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(red + 1)}
        onDecrease={() => setGreen(red - 1)}
        name="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(red + 1)}
        onDecrease={() => setBlue(red - 1)}
        name="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
