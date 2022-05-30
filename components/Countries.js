import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country';

export default function Countries() {
    const [countries, setCountry] = useState([]);
    const [serach, setSerach] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                setSerach(data)
            })
    }, [])
    const handleSearch = (text) => {
        const filter = countries.filter(country => country.name.common.includes(text));
        setSerach(filter)
    }
    return (

        <View>
            <Text>Countries: {countries.length}</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleSearch}
                placeholder="Search your country"

            />
            <ScrollView>
                {
                    serach.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})