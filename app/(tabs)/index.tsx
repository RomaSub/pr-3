import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const langs = [
  {
    id: "1",
    experience: "2 года",
    lang: "JavaScript",
  },
  {
    id: "2",
    experience: "1 год",
    lang: "TypeScript",
  },
  {
    id: "3",
    experience: "5 месяцев",
    lang: "Go",
  },
  {
    id: "4",
    experience: "2 месяца",
    lang: "Zig",
  },
];

export default function Index() {
  const renderItem = ({ item }: { item: (typeof langs)[0] }) => (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.langName}>{item.lang}</Text>
        <Text style={styles.experience}>Опыт: {item.experience}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={langs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
  },
  langName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 14,
    color: "gray",
  },
});
