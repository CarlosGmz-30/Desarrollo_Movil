import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { Icon, Card, Button } from '@rneui/themed'
import Cards from '../components/Cards'

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View>
                <View>
                    <Text style={{ fontSize: 25, marginTop: 25, marginBottom: 40, textAlign: 'center', fontWeight: 'bold' }}>Accesos rápidos</Text>
                </View>
                <View style={styles.fastAccess}>
                    <View style={styles.first}>
                        <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 10, justifyContent: 'center' }}>
                            <Icon name="car-back" type="material-community" size={80} color="orange" />
                            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Garage</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 10, justifyContent: 'center' }}>
                            <Icon name="shield-check" type="material-community" size={80} color="orange" />
                            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Mis Seguros</Text>
                        </View>
                    </View>
                    <View style={styles.second}>
                        <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 10, justifyContent: 'center' }}>
                            <Icon name="trophy-variant" type="material-community" size={80} color="orange" />
                            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Recompensas</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 150, height: 150, borderRadius: 10, justifyContent: 'center' }}>
                            <Icon name="account-group" type="material-community" size={80} color="orange" />
                            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Cuenta</Text>
                        </View>
                    </View>
                </View>
                <Cards />
                <View style={{ alignItems: 'center', marginBottom: 40 }}>
                    <View style={{ marginTop: 40, height: 40, backgroundColor: 'orange', justifyContent: 'center', width: '85%', borderRadius: 15 }}>
                        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Protegete con Prime Protection</Text>
                    </View>
                </View>
                <Card>
                    <Image
                        style={{ width: '100%', height: 150, borderRadius: 15 }}
                        source={require('../../../../../assets/img/costos.jpg')}
                    />
                    <Text>Estimación de costos</Text>
                    <Text>Solicita una estimación de costo de las reparaciones que tu auto necesite.</Text>
                    <Button color='warning'>Solicitar</Button>
                </Card>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 50,
    },
    fastAccess: {
        height: 300,
        justifyContent: 'space-around',
    },
    first: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginBottom: 50,
    },
    second: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
})
