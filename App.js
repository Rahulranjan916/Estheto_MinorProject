import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from './Components/Context';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import stack from './routes/StackNavigator';
import Profile from './Screens/Profile';

import RootStackScreen from './routes/RouteStackScreen';
import ProfileStackScreen from './routes/ProfileStack';
import TabNavigatorScreen from './routes/TabNavigator';
import MainStackScreen from './routes/MainNavigator';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const[userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(()=>({
    signIn:()=>{
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut:()=>{
      setUserToken(null);
      setIsLoading(false);
    },
    signUp:()=>{
      setUserToken('fgk');
      setIsLoading(false);
    },
  }))
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  },[]);

  if(isLoading){
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  }
  return (
    <AuthContext.Provider value={authContext}>
       <NavigationContainer >
       {userToken != null ? (
         <TabNavigatorScreen></TabNavigatorScreen>
       )
       :
       <RootStackScreen/> 
       }  
       </NavigationContainer>
       </AuthContext.Provider>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
