
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Profile from '../Screens/Profile';
import Favourite from '../Screens/FavouriteScreen';
import Reports from '../Screens/Reports';
import UpdatePassword from '../Screens/UpdatePassword';
import stack from './StackNavigator';


const ProfileStack = createStackNavigator();

const ProfileStackScreen =(navigation)=>(
  <ProfileStack.Navigator  screenOptions={{
    headerStyle :{
      backgroundColor:'#fa8072'
    },
    headerTintColor:"#000",
    headerTitleStyle:{
     fontWeight:'bold'
    }
  }}>

      <ProfileStack.Screen name="Profile" component={Profile}/>
      <ProfileStack.Screen name="Favourite" component={Favourite}/>
      <ProfileStack.Screen name="Reports" component={Reports}/>
      <ProfileStack.Screen name="UpdatePassword" component={UpdatePassword}/>
    </ProfileStack.Navigator>
)

export default ProfileStackScreen;