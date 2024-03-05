import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from "@rneui/base";
import React from 'react'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.picture}>
                <Image
                    style={{ width: 310, height: 300 }}
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
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '10%'
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