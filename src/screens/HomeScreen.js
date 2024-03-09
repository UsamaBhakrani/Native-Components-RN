import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
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
      <Button
        color="black"
        title="Generate Color"
        onPress={() => navigate("Color")}
      />
      <Button
        color="gray"
        title="Square Demo"
        onPress={() => navigate("Square")}
      />
      <Button
        color="coral"
        title="Text Screen"
        onPress={() => navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 50,
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 10,
    width: 5,
  },
});

export default HomeScreen;
