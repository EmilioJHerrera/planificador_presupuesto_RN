import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';

import ItemGasto from './ItemGasto';

const ListaGastos = ({gastos, setModal, setGasto}) => {
  return (
        <View style={styles.container}>

            <Text style={styles.title}>Lista Gastos</Text>

            {gastos.length === 0 ?
             <Text style= {styles.noGastosTxt}>No hay gastos</Text> :
              gastos.map(gasto => (
                <ItemGasto key={gasto.id} gasto={gasto} setModal={setModal} setGasto={setGasto}/>
            ))}
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 70,
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
