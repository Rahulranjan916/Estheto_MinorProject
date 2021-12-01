
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

import Connection from '../Components/Connection';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
import Animation from '../Components/Animation';
import PatientDetail from '../Screens/PatientDetail';
import Profile from '../Screens/Profile';
import ProfileStackScreen from './ProfileStack';


const stack = ({ navigation }) =>(
    <Stack.Navigator screenOptions={{
      headerStyle :{
        backgroundColor:'#fa8072'
      },
      headerTintColor:"#000",
      headerTitleStyle:{
       fontWeight:'bold'
      }
    }}>
      <Stack.Screen name="user" 
      component={Connection} 
      options={{
        title :'User',
      }}/>
     
      <Stack.Screen name="Animation"
      component={Animation}
      />

      <Stack.Screen name="PatientDetailScreen"
      component={PatientDetail}
      />
      
      </Stack.Navigator>
);

export default stack;