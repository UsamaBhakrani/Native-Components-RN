import { Button, StyleSheet, View } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <Button title="Generate Color" onPress={() => {}} />
      <View style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: `rgb(0,255,0)`,
  },
});

export default ColorScreen;
