import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Front_page from '../Components/Front_page';
import SignInScreen from '../Components/SignInScreen';
import SignUpScreen from '../Components/SIgnUpScreen';
import Connection from '../Components/Connection';
import Animation  from '../Components/Animation';

const RootStack = createStackNavigator();

const RootStackScreen =({navigation}) =>{
    return(
    <RootStack.Navigator screenOptions={{
        headerStyle :{
          backgroundColor:'#fa8072'
        },
        headerTintColor:{
         fontWeight:'bold'
        },
        headerMode : 'None' 
      }}>
       <RootStack.Screen name="Front_page" component={Front_page} options={{
        title:'Home'
      }}/>
  
      <RootStack.Screen name="SignIn" component={SignInScreen} options={{
        title:'SignIn'
      }}/>

    <RootStack.Screen name="user" component={Connection} options={{
        title:'SignIn'
      }}/>
  
      <RootStack.Screen name="newUser" component={SignUpScreen} options={{
        title:'SignUp'
      }}/>
    </RootStack.Navigator>
    )
}

export default RootStackScreen;