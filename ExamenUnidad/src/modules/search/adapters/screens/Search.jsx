import { StyleSheet, Text, View } from 'react-native'
// import { SearchBar } from 'react-native-elements';
import React from 'react'

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.image}></View>
                <View style={styles.image}></View>
                <View style={styles.image}></View>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.image}></View>
                <View style={styles.image}></View>
                <View style={styles.image}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        height: '20%',
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        borderRadius: 10,
    }, imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
    }
})