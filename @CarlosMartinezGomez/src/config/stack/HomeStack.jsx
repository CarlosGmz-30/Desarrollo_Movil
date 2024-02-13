import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../modules/home/adapters/screen/Home";
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Home" }} 
      />
    </Stack.Navigator>
  );
}
