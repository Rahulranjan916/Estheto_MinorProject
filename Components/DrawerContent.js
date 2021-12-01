import React from "react";
import {View, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar,
Title,
Caption,
Paragraph,
Drawer,
Text,
TouchableRipple,
Switch } from "react-native-paper";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from "./Context";

const DrawerContent= (props) =>{
    const [isDarkTheme, setDarkTheme] =React.useState(false);
    const {signOut} = React.useContext(AuthContext);
    const toggleTheme=()=>{
        setDarkTheme(!isDarkTheme);
    }
    return(
        <View style={{flex:1}}> 
        <DrawerContentScrollView {...props}>
        <View>
        <Drawer.Section style ={styles.drawerSection}>

            <DrawerItem
            icon = {({color,size})=>(
                <Icon 
                name="account-outline"
                color={color}
                size={size}
                />
            )}
            label = "Profile"
            onPress ={() => {props.navigation.navigate("Profile")}}
        />

        <DrawerItem
            icon = {({color,size})=>(
                <Icon 
                name="bookmark-outline"
                color={color}
                size={size}
                />
            )}
            label = "Bookmark"
            onPress ={() => {props.navigation.navigate("Bookmark") }}
        /> 
        
        <DrawerItem
            icon = {({color,size})=>(
                <Icon 
                name="settings-helper"
                color={color}
                size={size}
                />
            )}
            label = "Settings"
            onPress ={() => {props.navigation.navigate('Setting') }}
        />

        <DrawerItem
            icon = {({color,size})=>(
                <Icon 
                name="account-check-outline"
                color={color}
                size={size}
                />
            )}
            label = "Support"
            onPress ={() => {props.navigation.navigate("Support") }}
        />

        </Drawer.Section>
        <Drawer.Section title="Preference">
            <TouchableRipple onPress={()=>{toggleTheme()}}>
                <View style ={styles.preference} >
                    <Text>Dark Theme</Text>
                    <View pointerEvents = "none">
                    <Switch value ={isDarkTheme}/>
                    </View>
                </View>
            </TouchableRipple>
        </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <Drawer.Section style = {styles.bottomDrawerSection}>
        <DrawerItem
            icon = {({color,size})=>(
                <Icon 
                name="exit-to-app"
                color={color}
                size={size}
                />
            )}
            label = "SignOut"
            onPress ={() => {signOut()}}
        />

        </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent :{
        flex:1,
    },
    container:{
      flex:1,
      marginTop :20,
      backgroundColor:'#808080'
    },
    text:{
        marginTop:20
    },
   
    text_header:{
        color:"black",
        fontWeight:'bold',
        fontSize:15
    },
    userInfoSection:{
        paddingLeft:30
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:30
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor: "#f4f4f4",
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
});
export default DrawerContent;