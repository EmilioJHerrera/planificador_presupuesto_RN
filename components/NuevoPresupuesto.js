import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

const NuevoPresupuesto = () => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.label}>Presupuesto a gastar</Text>
            
            <TextInput
            keyboardType="numeric" 
            placeholder="Agrega presupuesto: Ej. 300"
            style={styles.input}/>

            <Pressable style={styles.buttom}>
                <Text style={styles.text_button}>Agregar</Text>
            </Pressable>

        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginHorizontal: 20,
      
        borderRadius: 10,
        paddingVertical: 30,
        transform: [{ translateY: 50 }],
        //https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.41,
        elevation: 8,
    },
    label:{
        textAlign: 'center',
        fontSize: 24,
        color: '#3b82f6',
        marginBottom: 20,
        
    },
    input:{
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        borderRadius: 10,
        marginHorizontal: 30,
    },
    buttom:{
        backgroundColor: '#1048a1',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 30,
    },
    text_button:{
        color: '#fff',
        fontSize:20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
 
export default NuevoPresupuesto;