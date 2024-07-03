/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import FavoritesScreen from '../screens/favorites';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Listado"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerStyle: {
            backgroundColor: '#ffe600',
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
        name="Favoritos"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}
