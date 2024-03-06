import { StyleSheet, Text, View } from 'react-native'
import { Input } from '@rneui/base'
import FeedProfile from '../../../profile/adapters/components/FeedProfile'
import React from 'react'

export default function Search() {
    return (
        <View style={styles.container}>
            <Input placeholder="Search" />
            <FeedProfile />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        height: '100%',
        marginTop: '10%',
        marginBottom: '10%',
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