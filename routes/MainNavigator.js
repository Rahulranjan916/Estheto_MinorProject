import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigatorScreen from './TabNavigator';

const MainStack = createStackNavigator();

const MainStackScreen =(navigation)=>(
  <MainStack.Navigator  screenOptions={{
    headerStyle :{
      backgroundColor:'#fa8072'
    },
    headerTintColor:"#000",
    headerTitleStyle:{
     fontWeight:'bold'
    }
  }}>
  <MainStack.Screen name="Home" component={TabNavigatorScreen}/>
  </MainStack.Navigator>
)

export default MainStackScreen;
