import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from 'react-navigation';  // Provide navigation prop to ResultsLIst directly from StackNavigator

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
      return null;
  }  

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress= { () => navigation.navigate('ResultsShow', { id: item.id }) } >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
  
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
  },
});

export default withNavigation(ResultsList);
