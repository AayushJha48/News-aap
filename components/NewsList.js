import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const loadNews = async () => {
    const response = (
      await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=bcbd29d17390417eae39a32d1ba938d6"
      )
    ).data;
    // console.log(response.articles);
    setNews(response.articles);
  };

  const renderNews = ({ item: news }) => {
    // console.log(news);
    return <NewsItem news={news} />;
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <FlatList
      style={styles.newsContainer}
      data={news}
      renderItem={renderNews}
      keyExtractor={(news) => news.publishedAt}
    />
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: "rgba(128, 128, 128, 0.1)",
  },
  // news: {
  //   height: 300,
  //   backgroundColor: "green",
  //   paddingHorizontal: "5%",
  //   paddingVertical: 30,
  // },
});

export default NewsList;
