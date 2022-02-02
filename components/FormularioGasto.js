import React, {useState, useEffect} from 'react';
import { StyleSheet, Text,TextInput ,View, Alert, Pressable, Image, Modal,SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import globalStyles from '../styles';

const FormularioGasto = ({modal, setModal, handleGasto,gasto, setGasto, handleDeleteGasto}) => {
  
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');

useEffect(()=>{
    if(gasto?.nombre){
        setNombre(gasto.nombre);
        setCantidad(gasto.cantidad.toString());//convertir a string para que no queje al leerlo
        setCategoria(gasto.categoria);
        setFecha(gasto.fecha);
        setId(gasto.id);
    }
},[gasto])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnContainer}>
                <Pressable onPress={()=>{
                    setModal(!modal);
                setGasto({});}}
                style={styles.btnCancel}>
                    <Text style={styles.btnCancelText}>Cancelar</Text>
                </Pressable>
                
                    {!!id && (

                <Pressable onPress={()=>{ handleDeleteGasto(id); }}
                style={styles.btnDelete}>
                    <Text style={styles.btnCancelText}>Eliminar</Text>
                </Pressable>
                    )}

            </View>

            <View style={styles.form}>
                <Text style={styles.title}>{gasto?.nombre ? 'Editar gasto' : 'Nuevo gasto'}</Text>

                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre gasto</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Nombre del gasto. Ej: comida'
                    value={nombre}
                    onChangeText={setNombre}/>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad gasto</Text>
                    <TextInput 
                    style={styles.input}
                    placeholder='Cantidad del gasto. Ej: 400'
                    keyboardType='numeric'
                    value={cantidad}
                    onChangeText={setCantidad}/>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Categoria</Text>
                    <Picker style={styles.input}
                    selectedValue={categoria}
                    onValueChange={(itemValue)=>setCategoria(itemValue)}>
                        <Picker.Item label='---Selecione categoria---' value=''/>
                        <Picker.Item label='Ahorro' value='ahorro'/>
                        <Picker.Item label='Comida' value='comida'/>
                        <Picker.Item label='Alquiler' value='alquiler'/>
                        <Picker.Item label='Salud' value='salud'/>
                        <Picker.Item label='Ocio' value='ocio'/>
                        <Picker.Item label='Gastos varios' value='gastos'/>
                        <Picker.Item label='Transporte' value='transporte'/>
                        <Picker.Item label='Telefonia' value='telefonia'/>

                    </Picker>
                </View>

                <Pressable style={styles.botonSubmit} onPress={()=> handleGasto({id,nombre, cantidad, categoria, fecha})}>
                    <Text style={styles.labelSubmit}>{gasto?.nombre ? 'Guardar cambios' : 'Agregar gasto'}</Text>
                </Pressable>


            </View>


            </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E40aF',
        flex: 1,
    },
    form: {
        ...globalStyles.container
    },
    title:{
        textAlign: 'center',
        fontSize: 28,
        marginVertical: 10,
        color: '#64748B',
    },
    campo:{
        marginVertical: 10,
    },
    label:{
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    input:{
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    botonSubmit:{
        backgroundColor: '#FF82AA',
        padding:10,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius:10,
    },
    labelSubmit:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnCancel:{
        flex:1,
        backgroundColor: '#Db2777',
        padding:10,
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius:10,
    },
    btnDelete:{
        
        flex:1,
        backgroundColor: 'red',
        padding:10,
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius:10,
    },
    btnCancelText:{
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
    },

});

export default FormularioGasto;
