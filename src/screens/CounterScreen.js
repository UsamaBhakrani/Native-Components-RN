import { useState } from "react";
import { Button, View, Text } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text style={{ fontSize: 50, textAlign: "center" }}>{counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button
        color="coral"
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
      />
    </View>
  );
};

export default CounterScreen;
