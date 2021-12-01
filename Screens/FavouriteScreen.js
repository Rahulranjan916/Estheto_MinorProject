import React from "react";
import { View, Text,StyleSheet,Button,TextInput} from 'react-native';
const Favourite=()=>{
    return(
        <View style={styles.container}>
        <Text>
           This is Favourite Screen
        </Text>
        <Button title="Hit ME" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Favourite;