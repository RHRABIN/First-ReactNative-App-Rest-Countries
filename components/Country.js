import { View, Text, Image, StyleSheet, Button, Alert, TextInput } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View >
            <Text style={styles.header}>Country: {country.name.common}</Text>

            <Image
                source={{ uri: country.flags.png }}
                style={{ width: 200, height: 200, marginBottom: 5, }}
            />
            <Button
                title="See Detail"
                onPress={() => Alert.alert(`Area: ${country.area}, Population: ${country.population}, Capital: ${country.capital[0]}`)}
                color="#841584"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        color: 'red',
        marginTop: 50,
        fontSize: 20
    },

})