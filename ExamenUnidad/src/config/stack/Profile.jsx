import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Profile from '../../modules/profile/adapters/screens/Profile';
import ImageDesc from '../../modules/home/adapters/screens/ImageDesc'

const Stack = createStackNavigator();
export default function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ title: 'Profile' }}
            />
            <Stack.Screen
                name="ImageDesc"
                component={ImageDesc}
                options={{ title: "Image Description" }}
            />
        </Stack.Navigator>
    )
}