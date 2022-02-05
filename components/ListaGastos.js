import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';

import ItemGasto from './ItemGasto';

const ListaGastos = ({gastos, setModal, setGasto, filtro, gastosFiltrados}) => {
  return (
        <View style={styles.container}>

            <Text style={styles.title}>Lista Gastos</Text>

            {filtro? gastosFiltrados.map(gasto =>(
                <ItemGasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto}/>
            )): gastos.map(gasto =>(
                <ItemGasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto}/>
            ))}

           {gastos.length === 0 || (gastosFiltrados.length ===0 && !!filtro) && <Text style= {styles.noGastosTxt}>No hay gastos</Text>}
           
           
            {/* {gastos.length === 0 ?
             <Text style= {styles.noGastosTxt}>No hay gastos</Text> :
              gastos.map(gasto => (
                <ItemGasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto}/>
            ))} */}
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 60,
    },
    title:{
        color: '#64748B',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    noGastosTxt:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 20,
    },
});

export default ListaGastos;
