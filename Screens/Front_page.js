import React from "react";
import {View, Text, StyleSheet,Button, Dimensions, 
    Image,
    TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const Front_page = (props) =>{
    const {navigation}=props.navigation
    return(
        <View style={styles.container}>
        <View style={[styles.header,
        {backgroundColor:"#2f4f4f"}]}>
        <Animatable.Image 
          animation = "bounceIn"
          duration = {1500}
          source ={require('../assets/logo.png')}
          style ={styles.logo}
          resizeMode='stretch'
          />
        </View>
        <Animatable.View style={styles.footer}
            animation = "fadeInUpBig"
            >
            <Text style ={styles.title}>Stay connected with us </Text>
            <Text style={styles.text}>Sign in with your account
            </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={ () =>props.navigation.navigate('SignIn')}
             style={
               [styles.signIn,{
                   borderColor:"#009387",
                   borderWidth:1,
                   marginTop:35,
               }]
             }>
            <Text>Get Started</Text>
            <MaterialIcons
            name ='navigate-next'
            color='black'
            size= {20}/>
            </TouchableOpacity>
            </View>
        </Animatable.View>

        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2f4f4f"
    },
    header:{
        flex:2,
        alignItems:'center',
        justifyContent:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width: height_logo,
        height: height_logo
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'grey',
        marginTop: 30
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold'
    }

    
});

export default Front_page;