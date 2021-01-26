import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/Home/HomeScreen";
import SettingsScreen from "../components/Settings/SettingsScreen";
import { NavigationConstants } from "./NavigationConstants";

const MainTab = createBottomTabNavigator();
export function MainTabNavigator() {
   return (
      <MainTab.Navigator>
         <MainTab.Screen
          name={NavigationConstants.Home}
          component={HomeScreen}
        />
        <MainTab.Screen
          name={NavigationConstants.Settings}
          component={SettingsScreen}
        />
      </MainTab.Navigator>
   )
}