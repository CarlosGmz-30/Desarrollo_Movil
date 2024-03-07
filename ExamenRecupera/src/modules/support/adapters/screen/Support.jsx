import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon, Card, Button } from '@rneui/themed'

export default function Support() {
    return (
        <View>
            <Card style={{ flexDirection: 'row' }}>
                <View style={styles.Card}>
                    <Image
                        style={{ width: 150, height: 150, borderRadius: 15 }}
                        source={require('../../../../../assets/img/carro.jpeg')}
                    />
                    <View style={{ width: 170, justifyContent: 'center' }}>
                        <Text style={styles.option}>Camioneta</Text>
                        <Text style={styles.option}>Marca</Text>
                        <Text style={styles.option}>Modelo</Text>
                        <Text style={styles.option}>AAA-000</Text>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        backgroundColor: 'white',
        width: 320,

        flexDirection: 'row',
        borderRadius: 15,
    },
    option: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    op: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        marginBottom: 15,
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
        padding: 10,

    }
})

