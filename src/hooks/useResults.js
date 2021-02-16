import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        }
        catch(err){
            setErrorMsg('Something went wrong!!!');
        }
    };

    //calling funtion at startup
    // searchApi('pasta');  BAD CODE
    useEffect( () => {              // Ru the arrow function when the component is rendered on first time   
        searchApi('indian');
    }, []);

    return [searchApi, results, errorMsg];
};