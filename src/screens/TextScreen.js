import { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setName(e)}
        style={styles.input}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "lightgray",
    height: 50,
    borderWidth: 1,
    borderColor: "black",
    padding: 1,
    margin: 10,
    fontSize: 30,
  },
  text: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },
});

export default TextScreen;
