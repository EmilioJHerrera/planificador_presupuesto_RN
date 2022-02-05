import React, {useEffect, useState} from 'react';
import { StyleSheet,Image, Text, View, TextInput, Pressable } from "react-native";

import globalStyles from '../styles';
import { formatearNumero } from '../helpers';

import CircularProgress from 'react-native-circular-progress-indicator';


const ControlPresupuesto = ({presupuesto,gastos, handleReset}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(()=>{
        const totalGastos = gastos.reduce((total,gasto) => Number(gasto.cantidad) + total,0);
        setGastado(totalGastos)

        const totalDisponible = Number(presupuesto) - totalGastos;
        setDisponible(totalDisponible);

        const porcentajeGastado = (totalGastos * 100) / Number(presupuesto);
        setPorcentaje(porcentajeGastado);
    },[gastos])



  return (
        <View style={styles.container}>
            <View style={styles.centrar}>
            <CircularProgress 
                value={porcentaje}
                duration={1000}
                radius={150}
                valueSuffix='%'
                title='Gastado'
                inActiveStrokeColor='#F5f5f5'
                inActiveStrokeWidth={20}
                activeStrokeColor='#3b82f6'
                activeStrokeWidth={20}
                titleStyle={{fontSize: 20, fontWeight: 'bold'}}
                titleColor='#647488' 
            />
                {/* <Image
                style={styles.image} 
                source = {require('../image/grafico.jpg')} /> */}
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Presupuesto:{' '}</Text>{presupuesto}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Disponible:{' '}</Text>{disponible}
                </Text>
                <Text style={styles.valor}>
                    <Text style={styles.label}>Gastado:{' '}</Text>{gastado}
                </Text>       
                
                <Pressable style={styles.boton} onLongPress={()=>handleReset()}>
                    <Text style={styles.botonLabel}>Reiniciar App</Text>
                </Pressable>
            </View>


        </View>
  );
};

const styles = StyleSheet.create({
        container:{
            ...globalStyles.container,
        },
        centrar:{
            alignItems: 'center',
        },
        image:{
            width: 200,
            height: 200,
        },
        textContainer:{
            marginTop: 50,
        },
        valor:{
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 20,
        },
        label:{
            fontWeight: 'bold',
            color: '#3b82f6',
        },
        boton:{
            backgroundColor: 'red',
            padding: '2%',
            borderRadius: 10,
            marginHorizontal: '10%',
        },
        botonLabel:{
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            textTransform: 'uppercase',
        },
    });
export default ControlPresupuesto;
