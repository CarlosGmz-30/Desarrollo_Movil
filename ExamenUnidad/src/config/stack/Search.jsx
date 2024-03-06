import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Search from '../../modules/search/adapters/screens/Search';
import ImageDesc from '../../modules/home/adapters/screens/ImageDesc'

const Stack = createStackNavigator();
export default function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Search'
                component={Search}
                options={{ title: 'Search' }}
            />
            <Stack.Screen
                name="ImageDesc"
                component={ImageDesc}
                options={{ title: "Image Description" }}
            />
        </Stack.Navigator>
    )
}