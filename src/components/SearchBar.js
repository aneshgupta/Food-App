import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ( { term, onTermChange, onTermSubmit} ) => {
  return (
    <View style={styles.viewStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize= 'none'
        autoCorrect= {false }
        style={styles.textStyle} 
        placeholder="Search" 
        value={term} 
        onChangeText= { newTerm => onTermChange(newTerm) }
        onEndEditing= { () => onTermSubmit() }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 10,  
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    padding: 5
  },
  textStyle: {
      flex: 1,
      fontSize: 18
  },
  iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 10
  }
});

export default SearchBar;
