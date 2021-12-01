import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Animation = (props) => {
    return(
        <View>
            <Text>This is the page for Animation</Text>
             <View>
                 <Button title ='Hit me' onPress={()=>props.navigation.navigate('PatientDetailScreen')} />
             </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Animation;