import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stack/HomeStack";
import NewsStack from "../stack/NewsStack";
import SportsStack from "../stack/SportsStack";
import AuthStack from "../stack/AuthStack";
import { Icon } from "@rneui/base";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="NewsStack"
          component={NewsStack}
          options={{ title: "News" }}
        />
        <Tab.Screen
          name="SportsStack"
          component={SportsStack}
          options={{ title: "Sports" }}
        />
        <Tab.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ title: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material-community";
  switch (routeName) {
    case "HomeStack":
      iconName = focused ? "home" : "home-outline";
      break;
    case "NewsStack":
      iconName = focused ? "heart" : "heart-outline";
      break;
    case "SportsStack":
      iconName = focused ? "car-sports" : "car-sports";
      break;
    case "AuthStack":
      iconName = focused ? "account" : "account-outline";
      break;
  }
  return { iconName, iconType };
};