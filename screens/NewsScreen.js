import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import NewsList from "../components/NewsList";

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <NewsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsScreen;
