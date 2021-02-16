import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.viewStyle} >
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 5,
    marginBottom: 5,
  },
  imageStyle: {
    width: 200,
    height: 130,
    borderRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetails;
