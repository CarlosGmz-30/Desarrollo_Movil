import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Support from '../../modules/support/adapters/screen/Support';

const Stack = createStackNavigator();
export default function SupportStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Support'
                component={Support}
                options={{ title: 'Support' }}
            />
        </Stack.Navigator>
    )
}