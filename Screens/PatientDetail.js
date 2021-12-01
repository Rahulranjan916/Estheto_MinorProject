import React from "react";
import { View, Text,StyleSheet,Button,TextInput,Platform} from 'react-native';

const PatientDetail = () => {
    return(
        <View style={styles.container}>
        <View style={styles.patientFormContainer}>
        <Text style={styles.text_header}>Patient Detail </Text> 
        </View>
        <View style={styles.footer}>
            <Text style={styles.text_footer}>
                Patient name
            </Text>
            <TextInput 
            placeholder="Enter Patient Name"
            style={styles.textInput}
            />
            <Text style={styles.text_footer }>
                Date of Birth
            </Text>
            <TextInput
            placeholder=" "
            style={styles.textInput}
            />
              <Text style={styles.text_footer}>
                Age
            </Text>
            <TextInput 
            placeholder=" "
            style={styles.textInput}
            />
              <Text style={styles.text_footer}>
                Gender
            </Text>
            <TextInput 
            placeholder=""
            style={styles.textInput}
            />

             <Text style={styles.text_footer}>
                Contact Number
            </Text>
            <TextInput 
            placeholder=""
            style={styles.textInput}
            />

<Text style={styles.text_footer}>
                Alternate Contact No
            </Text>
            <TextInput 
            placeholder=""
            style={styles.textInput}
            />
              <Text style={styles.text_footer}>
                Address
            </Text>
            <TextInput 
            placeholder=""
            style={styles.textInput}
            />

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    patientFormContainer:{
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    },
    text_footer:{
        color:'#05375a',
        fontSize:15
    },
    text_header:{
        color:"#000",
        fontWeight:'bold',
        fontSize:20
    },
    textInput:{
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:'black',
        marginTop:1
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:30
    },
})
export default PatientDetail;