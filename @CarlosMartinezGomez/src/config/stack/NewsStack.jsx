import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import News from "../../modules/news/adapters/screen/News";
const Stack = createStackNavigator();
export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
          name="News" 
          component={News} 
          options={{ title: "News" }} 
      />
    </Stack.Navigator>
  );
}
