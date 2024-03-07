import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '@rneui/themed';
import React from 'react'

export default function Cards() {
    return (
        <View style={styles.container}>
            <View style={styles.Card}>
                <Image
                    style={{ width: 150, height: 150, borderRadius: 15}}
                    source={require('../../../../../assets/img/mecanico.jpg')}
                />
                <View style={{ width: 170, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Con Prime Protection estás protegido todo el tiempo</Text>
                    <Button color='warning'>Protegete</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Card: {
        backgroundColor: 'white',
        width: 320,
        marginTop: 40,
        flexDirection: 'row',
        borderRadius: 15,
    }
})