import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >

            <Feather
                name='search'
                style={styles.iconStyle}

            />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={true}
                value = { term}
                onChangeText = { onTermChange }
                onEndEditing = { onTermSubmit }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e0dfda',
        height: 50,
        marginHorizontal: 50,
        marginTop : 20,
        marginBottom : 20,
        borderRadius: 20,
        flexDirection: 'row',


    },
    inputStyle: {
        marginHorizontal: 10,
        flex: 1
    },
    iconStyle: {
        marginHorizontal : 10,
        fontSize: 30,
        alignSelf: 'center'
    }

});

export default SearchBar;
