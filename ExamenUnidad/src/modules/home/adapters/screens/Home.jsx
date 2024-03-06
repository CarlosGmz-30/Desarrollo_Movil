import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from "@rneui/base";
import React from 'react'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{ margin: '5%' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Minecraft</Text>
                <View style={styles.picture}>
                    <Image
                        style={{ width: 310, height: 300, borderRadius: 8 }}
                        source={require('../../../../image/minecraft.jpg')}
                    />
                </View>
                <View style={styles.likes}>
                    <Text style={{ fontSize: 18, marginRight: 8 }}>15</Text>
                    <Icon name="thumb-up-outline" type="material-community" size={25} color="black" />
                    <Icon name='send' type='material-community' size={25} color="black" style={{ marginLeft: '67%' }}></Icon>
                    <Icon name='arrow-left-top' type='material-community' size={28} color="black"></Icon>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    picture: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likes: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '4%',
    }
})