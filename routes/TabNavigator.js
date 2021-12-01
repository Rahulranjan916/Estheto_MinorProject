import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import stack from './StackNavigator';
import Profile from '../Screens/Profile';
import ProfileStackScreen from './ProfileStack';

const Tab = createMaterialBottomTabNavigator();
const TabNavigatorScreen=()=>(
<Tab.Navigator
initialRouteName="Home"
activeColor="#e91e63"
barStyle={{ backgroundColor: 'tomato' }}
>
<Tab.Screen
  name="Home"
  component={stack}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="home" color={color} size={26} />
    ),
  }}
/>

<Tab.Screen
  name="Profile"
  component={ProfileStackScreen}
  options={{
    tabBarLabel: 'Profile',
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account" color={color} size={26} />
    ),
  }}
/>
</Tab.Navigator>

)

export default TabNavigatorScreen;

