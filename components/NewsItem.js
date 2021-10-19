import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

const NewsItem = ({ news }) => {
  const [result, setResult] = useState(null);

  // console.log(title);
  if (!news.urlToImage) {
    news.urlToImage =
      "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
  }

  const handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(news.url, {
      createTask: false,
    });
    setResult(result);
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handlePressButtonAsync}>
        <View style={styles.news}>
          <Image
            style={styles.image}
            source={{
              uri: news.urlToImage,
            }}
          />
          <Text style={styles.text} numberOfLines={2}>
            {news.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginVertical: 30,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 5,
  },
  news: {
    paddingHorizontal: "5%",
    paddingVertical: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default NewsItem;
