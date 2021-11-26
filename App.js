import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

import Front_page from './Screens/Front_page';
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from './Screens/SIgnUpScreen';
import Connection from './Screens/Connection';
import Animation from './Screens/Animation';


const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

const stack = ({ navigation }) =>(
  <Stack.Navigator screenOptions={{
    headerStyle :{
      backgroundColor:'#fa8072'
    },
    headerTintColor:{
     fontWeight:'bold'
    }
  }}>

    <Stack.Screen name="Front_page" component={Front_page} options={{
      title:'Home', alignItems:'centre',justifyContent:'centre'
    }}/>

    <Stack.Screen name="SignIn" component={SignInScreen} options={{
      title:'SignIn', alignItems:'centre',justifyContent:'centre'
    }}/>

    <Stack.Screen name="newUser" component={SignUpScreen} options={{
      title:'SignUp', alignItems:'centre',justifyContent:'centre'
    }}/>

    <Stack.Screen name="user" component={Connection} options={{
      title :'User',
    }}/>

    <Stack.Screen name="Animation" component={Animation} options={{
      title:'Animated', alignItems:'centre',justifyContent:'centre'
    }}
    />
  </Stack.Navigator>

);




export default function App() {
  return (
       <NavigationContainer>
            <drawer.Navigator initialRouteName="Front_page" >
              <drawer.Screen name='Home' component={stack} />
              <drawer.Screen name='SignOut' component={SignInScreen}/>
            </drawer.Navigator>
       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
