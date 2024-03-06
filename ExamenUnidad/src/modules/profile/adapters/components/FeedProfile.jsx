import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListRestaurant from './FlatListImages'

export default function FeedProfile() {
    const arrayImagenes = [
        {
            id: 1,
            image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f',
            description: 'Minecraft'
        },
        {
            id: 2,
            image: 'https://steamuserimages-a.akamaihd.net/ugc/780748444120302047/E1DC809048D1293B96B32E7CEA81BAF188A08DC5/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            description: 'Minecraft Aquatic Update'
        },
        {
            id: 3,
            image: 'https://images.nintendolife.com/52e3d2a79e3d9/minecraft-nether-update.large.jpg',
            description: 'Minecraft Nether Update'
        },
        {
            id: 4,
            image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/06/Minecraft-End-City-Official-Artwork.jpg',
            description: 'Minecraft End Update'
        },
        {
            id: 5,
            image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/c/c7/Trails_And_Tales_Header.jpg',
            description: 'Minecraft Trails & Tales Update'
        },
        {
            id: 6,
            image: 'https://feedback.minecraft.net/hc/article_attachments/6614151800461/Minecraft_WildUpdate_1920x1080.png',
            description: 'Minecraft Wild Update'
        }
    ]
    return (
        <View>
            <FlatList
                data={arrayImagenes}
                numColumns={3}
                renderItem={({ item }) => (
                    <FlatListRestaurant
                        image={item.image}
                        description={item.description}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})