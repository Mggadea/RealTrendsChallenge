import * as React from 'react';
import MyTabs from './bottomTab';
import DetailsScreen from '../screens/details';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CustomBackButton } from '../components/customBackButton';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen
        options={{
          headerLeft: () => <CustomBackButton />,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffe600',
          },
        }}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}
