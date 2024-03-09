import { StyleSheet, View } from "react-native";
import ColorCounter from "./ColorCounter";
import { useReducer } from "react";
import colorReducer from "../reducers/colorReducer";
import { DECREASE, INCREASE } from "../actions";

const initialState = { red: 0, green: 0, blue: 0 };

const SquareScreen = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", payload: INCREASE });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", payload: DECREASE });
        }}
        name="Red"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "green", payload: INCREASE });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", payload: DECREASE });
        }}
        name="Green"
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "blue", payload: INCREASE });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", payload: DECREASE });
        }}
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
