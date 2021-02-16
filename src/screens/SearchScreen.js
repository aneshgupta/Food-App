import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.viewStyle}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList 
          results={filterResultsByPrice("$$")} 
          title="Bit Pricier"       
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default SearchScreen;
