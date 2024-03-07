import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.cotainer}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        color="coral"
        title="Go to Components"
        onPress={() => navigate("Component")}
      />
      <Button title="Go to List" onPress={() => navigate("List")} />
      <Button
        color="gold"
        title="Go to Image"
        onPress={() => navigate("Image")}
      />
      <Button
        color="cyan"
        title="Go to Counter"
        onPress={() => navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
    width: 5,
  },
});

export default HomeScreen;
