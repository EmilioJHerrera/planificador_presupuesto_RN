import React, {useEffect} from 'react';
import { StyleSheet,Image, Text, View, TextInput, Pressable } from "react-native";

import { Picker } from '@react-native-picker/picker';
import globalStyles from "../styles";

const Filtro = ({filtro, setFiltro, gastos, setGastosFiltrados}) => {
  
  useEffect(()=>{
    if (filtro === ''){
        setGastosFiltrados([]);
    }else{
        const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
        setGastosFiltrados(gastosFiltrados);
    }
  },[filtro])
  
  
    return (
      <View style={styles.container}>
          <Text style={styles.label}>Filtro</Text>
          <Picker 
          selectedValue={filtro}
          onValueChange={(valor)=> {setFiltro(valor)}}>
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
  );
};

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
    },
    label:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#64748B',
    },
});
export default Filtro;
