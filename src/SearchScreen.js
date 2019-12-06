import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from './components/SearchBar'
import yelp from './api/yelp';



const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [ errorMessege, setErrorMessege ] = useState('');


    const searchApi = async () => {
        try{
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'

            }
        });
        setResults(response.data.businesses);
        }catch(err){
            setErrorMessege('Something Went Wrong ');
        };
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={
                    (newTerm) => setTerm(newTerm)
                }
                onTermSubmit={ () => console.log('term') }

                onTermSubmit={searchApi}
            />
            <Text>SearchScreen</Text>
            <Text> {errorMessege} </Text>
            <Text> We have found {results.length} </Text>
        </View>
    )
}

export default SearchScreen;
