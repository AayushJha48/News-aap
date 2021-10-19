import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>News Aap</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(169, 92, 104)",
    paddingVertical: 20,
    paddingLeft: "5%",
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});

export default Header;
