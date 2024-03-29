import { Text, View, FlatList, StyleSheet } from "react-native";

const friends = [
  { id: 1, name: "Friend 1" },
  { id: 2, name: "Friend 2" },
  { id: 3, name: "Friend 3" },
  { id: 4, name: "Friend 4" },
  { id: 5, name: "Friend 5" },
  { id: 6, name: "Friend 6" },
  { id: 7, name: "Friend 7" },
  { id: 8, name: "Friend 8" },
  { id: 9, name: "Friend 9" },
  { id: 10, name: "Friend 10" },
];
const ListScreen = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={{ padding: 20 }}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
