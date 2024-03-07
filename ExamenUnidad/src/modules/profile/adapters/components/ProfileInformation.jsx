import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ProfileInformation() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={{ width: 80, height: 80, borderRadius: 50 }}
                    source={require('../../../../image/steve.png')}
                />
                <View style={styles.profileInformation}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Carlos Martínez Gómez</Text>
                    <Text style={{ fontSize: 15 }}>20223tn066@utez.edu.mx</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '10%',
        marginTop: '8%',
        marginBottom: '12%',
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
    },
    profileInformation: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '5%',
        justifyContent: 'center',
    },
})