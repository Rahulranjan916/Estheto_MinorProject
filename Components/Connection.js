import React,{Component} from "react";

import {View,Text,StyleSheet, Button, Image, Touchable} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


const Connection = (props) =>{
   return (
   <View style = {styles.container}>
     <View style = {styles.header} >
     <Image 
     source ={require('../assets/download.jpg')}
     resizeMode='stretch'
     />
        </View>
        <View style = {styles.footer}>
        <Text style={styles.greeting_text}> Hello! </Text>
        <Text style ={styles.text_footer} >If you have an Estehto, you can pair it with Your Android Device</Text>
        <TouchableOpacity 
        onPress={ () => props.navigation.navigate('Animation')}>
        <Text style= {[styles.signIn,{
                   borderColor:"blue",
                   borderWidth:1,
                   marginTop:15
        }]}> Connect Device </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
         justifyContent:'center'

    },
    header:{
        flex:2,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:2.7,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
        alignItems:'center',
        justifyContent:'center'
    },
    text_footer:{
        color:'#05375a',
        fontSize:20
    },
    greeting_text:{
        color:'black',
        fontSize:30
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
       fontSize:25
    },
})

export default Connection;
