import { Tabs } from "expo-router";
import React from "react";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";
import { Platform, Settings } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome icon={SolidIcons.home} />,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: () => <FontAwesome icon={SolidIcons.Settings} />,
          title: "Setting",
        }}
      />
    </Tabs>
  );
}
