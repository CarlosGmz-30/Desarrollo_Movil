import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GarageStack from "../stack/GarageStack";
import SupportStack from "../stack/SupportStack";
import HomeStack from "../stack/HomeStack";
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
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="GarageStack"
          component={GarageStack}
          options={{ title: "Garage" }}
        />
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="SupportStack"
          component={SupportStack}
          options={{ title: "Support" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material-community";
  switch (routeName) {
    case "GarageStack":
      iconName = focused ? "car-back" : "car-back";
      break;
    case "HomeStack":
      iconName = focused ? "home" : "home-outline";
      break;
    case "SupportStack":
      iconName = focused ? "face-agent" : "face-agent";
      break;
  }
  return { iconName, iconType };
};
