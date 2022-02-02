import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

import globalStyles from "../styles";

const NuevoPresupuesto = ({presupuesto,setPresupuesto,handlePresupuesto}) => {


    return ( 
        <View style={styles.container}>
            <Text style={styles.label}>Presupuesto a gastar</Text>
            
            <TextInput
            keyboardType="numeric" 
            placeholder="Agrega presupuesto: Ej. 300"
            style={styles.input}
            value={presupuesto.toString()}
            onChangeText={setPresupuesto}/>

            <Pressable style={styles.buttom}
            onPress={() => handlePresupuesto( presupuesto)}
            >
                <Text style={styles.text_button}>Agregar</Text>
            </Pressable>

        </View>
     );
}

const styles = StyleSheet.create({
    container:{
      ...globalStyles.container,
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