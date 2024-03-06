import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileInformation from '../components/ProfileInformation'
import FeedProfile from '../components/FeedProfile'

export default function Profile() {
    return (
        <View style={styles.container}>
            <ProfileInformation />
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Mi Posts</Text>
            <FeedProfile />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '2%',
    }
})