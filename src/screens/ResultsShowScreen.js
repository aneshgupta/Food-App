import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShow = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result,setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect( ()=> {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View style={styles.viewStyle}>
        <Text style={{fontWeight: 'bold'}} >{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem= {({item}) => {
                return <Image style={styles.imageStyle} source={{uri: item}} />;
            }}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        margin: 3,
        flex: 1,
        alignItems: 'stretch'
    },
    imageStyle: {
        height: 210,
        marginVertical: 3,
        borderRadius: 4
    }
});

export default ResultsShow;