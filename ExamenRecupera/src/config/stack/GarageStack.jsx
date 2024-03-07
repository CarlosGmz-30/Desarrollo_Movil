import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Garage from '../../modules/garage/adapters/screen/Garage';

const Stack = createStackNavigator();
export default function GarageStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Garage'
                component={Garage}
                options={{ title: 'Garage' }}
            />
        </Stack.Navigator>
    )
}