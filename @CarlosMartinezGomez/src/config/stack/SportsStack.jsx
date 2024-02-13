import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sports from "../../modules/sports/adapters/screen/Sports";
const Stack = createStackNavigator();
export default function SportsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sports"
        component={Sports}
        options={{ title: "Sports" }}
      />
    </Stack.Navigator>
  );
}
