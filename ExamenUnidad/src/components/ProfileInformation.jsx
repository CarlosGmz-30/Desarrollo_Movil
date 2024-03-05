import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ProfileInformation() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={{ width: 80, height: 80 }}
                    source={require('../image/avatar-de-usuario.png')}
                />
                <View style={styles.profileInformation}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Carlos Martínez Gómez</Text>
                    <Text style={{ fontSize: 15 }}>20223tn066@utez.edu.mx</Text>
                </View>
            </View>
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