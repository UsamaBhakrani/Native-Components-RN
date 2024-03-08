import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ name, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Button onPress={onIncrease} title={`Increase ${name}`} />
      <Button onPress={onDecrease} title={`Decrease ${name}`} />
    </View>
  );
};

export default ColorCounter;
