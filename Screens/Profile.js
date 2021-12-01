import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Avatar,
    Title,
    Caption,
    TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../Components/Context";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Profile = (props) => {
    const {signOut} = React.useContext(AuthContext);
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop:15}}>
                <Avatar.Image
                source={{
                    uri:'https://api.adorable.io/avatars/80/abott@adorable.png'
                }}
                size={80}
                />
            </View>
            <View style={{marginLeft:20}}>
                <Title style={[styles.title,{
                    marginTop:15,
                    marginBottom:5
                }]}>Rahul Ranjan</Title>
                <Caption style={styles.caption}>rahulranjan91622@gmail.com</Caption>

            </View>
        </View>
    

        <View style={styles.userInfoSection}>
      
        <View style={styles.row}>
        <Icon name="phone" size={20}/>
        <Text style={{color:'#777777',marginLeft:20}}>
            1234557
        </Text>
        </View>
        
        <View style={styles.row}>
        <Icon name="email" size={20}/>
        <Text style={{color:'#777777',marginLeft:20}}>
            rahulranjan91622@gmail.com
        </Text>
        </View>
        </View>
        <View style ={{marginTop:50}}>
        <TouchableRipple onPress={()=>props.navigation.navigate('Favourite')}>
            <View style={styles.menuItem}>
                <Icon name="heart-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemsText}>Favorites </Text>
            </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>props.navigation.navigate('Reports')}>
            <View style={styles.menuItem}>
                <Icon name="bell" color="#FF6347" size={25}/>
                <Text style={styles.menuItemsText}>Reports </Text>
            </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{props.navigation.navigate('UpdatePassword')}}>
            <View style={styles.menuItem}>
                <Icon name="key" color="#FF6347" size={25}/>
                <Text style={styles.menuItemsText}>Change Password </Text>
            </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
                <Icon name="share-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemsText}>Invite a Friend </Text>
            </View>
        </TouchableRipple>

        <TouchableRipple onPress={()=>{signOut()}}>
            <View style={styles.menuItem}>
                <Icon name="exit-to-app" color="#FF6347" size={25}/>
                <Text style={styles.menuItemsText}>SignOut</Text>
            </View>
        </TouchableRipple>


        </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    userInfoSection:{
        paddingHorizontal:30,
        marginTop:25
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500'
    },
    row:{
        flexDirection:'row',
        marginBottom:10
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100
    },
    infoBox:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    menuWrapper:{
        marginTop:10
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30
    },
    menuItemsText:{
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26
    },
});

export default Profile;