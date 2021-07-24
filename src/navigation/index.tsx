/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
// files
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import NotFoundScreen from '../screens/NotFoundScreen';
import {NavigationProps, RootStackParamList} from '../types/navigation';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export default function Navigation({colorScheme = 'light'}: NavigationProps) {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator size="large" color="#00ff00" />}
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Root" component={BottomTabNavigator} />
        <Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{title: 'Not Found'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
