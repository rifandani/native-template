/**
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// files
import ReduxTabNavigator from './ReduxTabNavigator';
import RQueryTabNavigator from './RQueryTabNavigator';
import TabBarIcon from '../components/TabBarIcon';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {BottomTabParamList} from '../types/navigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Redux"
      tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
      {/* redux screen */}
      <BottomTab.Screen
        name="Redux"
        component={ReduxTabNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="looks-one" color={color} />
          ),
        }}
      />

      {/* TODO: react-query screen */}
      <BottomTab.Screen
        name="RQuery"
        component={RQueryTabNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon name="looks-two" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
