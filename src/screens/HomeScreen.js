import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        color="coral"
        style={styles.button}
        title="Go to Components"
        onPress={() => navigate("Component")}
      />
      <Button
        style={styles.button}
        title="Go to List"
        onPress={() => navigate("List")}
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
