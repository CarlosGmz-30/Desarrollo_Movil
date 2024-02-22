import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../../modules/auth/adapters/screen/Auth";
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="Auth" 
          component={Auth} 
          options={{ title: "Profile" }} 
      />
    </Stack.Navigator>
  );
}
