import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        color="coral"
        title="Go to Components"
        onPress={() => navigate("Component")}
      />
      <Button
        title="Go to List"
        onPress={() => navigate("List")}
      />
      <Button
        color="gold"
        title="Go to Image"
        onPress={() => navigate("Image")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
    width: 5,
  },
});

export default HomeScreen;
