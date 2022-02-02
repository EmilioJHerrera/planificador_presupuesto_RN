import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal } from 'react-native';

import globalStyles from '../styles';
import { formatearFecha } from '../helpers';

const diccionarioImages = {
    ahorro: require('../image/icono_ahorro.png'),
    comida: require('../image/icono_comida.png'),
    casa: require('../image/icono_casa.png'),
    ocio: require('../image/icono_ocio.png'),
    salud: require('../image/icono_salud.png'),
    gastos: require('../image/icono_gastos.png'),
    suscripciones: require('../image/icono_suscripciones.png'),

};

const ItemGasto = ({gasto, setModal, setGasto}) => {
    const {nombre, categoria, cantidad, fecha, id} = gasto;

    const handleAcciones = () =>{
        setModal(true);
        setGasto(gasto);
    };   

  return (
      <Pressable onLongPress={handleAcciones}>
        <View style={styles.container}>
            <View style={styles.contenido}>
                <View style={styles.contenedorImagen}>
                    <Image source={diccionarioImages[categoria]}
                    style={styles.imagen}/>
                <View style= {styles.contenedorTexto}>
                    <Text style={styles.categoria}>{categoria}</Text>
                    <Text style={styles.nombre}>{nombre}</Text>
                    <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>
                </View>
                    <Text style={styles.cantidad}>{cantidad} EUR</Text>
            </View>

            </View>
        </View>
      </Pressable>
  );
};

const styles = StyleSheet.create({
    container:{
        ...globalStyles.container,
        marginBottom: 10,
    },
    contenido:{
        flexDirection: 'row',
     alignItems: 'center',
        justifyContent: 'space-between',
    },
    contenedorImagen:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imagen:{
        width: 50,
        height: 50,
        marginRight: 10,
    },
    contenedorTexto:{
        // backgroundColor: '#f5f5f5',
        flex:1,
    },
    categoria:{
        color: '#64748B',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    nombre:{
        fontSize: 16,
        
    },
    cantidad:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    fecha:{
        fontWeight: 'bold',
    },
});
export default ItemGasto;
