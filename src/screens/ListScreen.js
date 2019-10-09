import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FlingGestureHandler } from "react-native-gesture-handler";

const ListScreen = () => {
  const listArray = [
    { name: "Test1", key: "1" },
    { name: "Test2", key: "2" },
    { name: "Test3", key: "3" },
    { name: "Test4", key: "4" },
    { name: "Test5", key: "5" }
  ];
  return (
    <FlatList
      horizontal //orientation of list
      showsHorizontalScrollIndicator={false}
      keyExtractor={test => test.name}
      data={listArray}
      renderItem={({ item, key }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
