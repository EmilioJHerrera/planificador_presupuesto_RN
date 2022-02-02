//import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import React, {useState} from "react";

import Header from './components/Header';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import ControlPresupuesto from './components/ControlPresupuesto';
import FormularioGasto from './components/FormularioGasto';
import ListaGastos from './components/ListaGastos';
import Filtro from './components/Filtro';

export default function App() {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState('');
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [gasto, setGasto] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  const handlePresupuesto = (presupuesto) => {  

    if (Number(presupuesto)>0){
        console.log ("presupuesto valido:", presupuesto);
        setIsValidPresupuesto(true);
      }else{
        console.log ('presupuesto invalido:');
        Alert.alert('Error', 'El presupuesto debe ser mayor a 0', [{text: 'OK'}]);
      }
  }

  const handleGasto = (gasto) => {
    //console.log(Object.values(gasto));
    if ([gasto.nombre, gasto.categoria, gasto.cantidad].includes("")){
      Alert.alert('Error', 'Todos los campos deben estar llenos', [{text: 'OK'}]);
    
      return
    }

    //comprobar si es una edicion o un nuevo gasto
    if (gasto.id){
      //es una edicion
      const gastosActualizados = gastos.map( gastoTemporal => gastoTemporal.id === gasto.id ? gasto : gastoTemporal);
      setGastos(gastosActualizados);

    }else {
      //es un nuevo gasto

      //vaciar el fomulario y proceder a agregar el gasto
      gasto.id= Date.now(); //generar un id por fecha
      gasto.fecha= Date.now();
      gasto.cantidad = Number(gasto.cantidad);
      setGastos([...gastos, gasto]);
      console.log('gasto from handleGasto:',gasto);
    }
    
    setModal(!modal);

  };

  const handleDeleteGasto = (id) => {
    Alert.alert('Eliminar gasto',
     'Un gasto eliminado no se puede recuperar, ¿Continuar?',
      [
        {text: 'No', style: 'cancel'}, 
        {text: 'Si', onPress: () => {
          const gastosActualizados = gastos.filter( gastoAux => gastoAux.id !== id);
          setGastos(gastosActualizados);
          setModal(!modal);
          setGasto({});
        }},
      ]
      )
    console.log('elimiando gasto:', id);
  };
    
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <Header />
        {isValidPresupuesto ? 
        <ControlPresupuesto
        gastos = {gastos} 
        presupuesto= {presupuesto}/> :
         <NuevoPresupuesto 
         presupuesto= {presupuesto}
         setPresupuesto ={setPresupuesto}
         handlePresupuesto={handlePresupuesto}/>}
        
      </View>

      {isValidPresupuesto && (
      <>
      <Filtro filtro={filtro} setFiltro={setFiltro} gastos={gastos} setGastosFiltrados={setGastosFiltrados}/>
      <ListaGastos gastos={gastos} setModal={setModal} setGasto={setGasto}/>
      </>
      )}

      </ScrollView>
          {modal && (
            <Modal
            animationType="slide"
            visible={modal}
            onRequestClose={() => {setModal(!modal)}}
            >
              <FormularioGasto modal={modal} setModal={setModal} handleGasto={handleGasto} 
              gasto={gasto} setGasto={setGasto} handleDeleteGasto={handleDeleteGasto}/>
            </Modal>
          )}


          {isValidPresupuesto && (
             <Pressable onPress={()=>setModal(!modal)} style={styles.boton}>
               <Text style={styles.botonLabel}>Agregar gasto</Text>
              {/* <Image 
              style={styles.image}
              source={require('./image/nuevo-gasto.png')}/>
      */}
            </Pressable>
    
     )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#f5f5f5',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header:{ 
    paddingVertical: 20,
     backgroundColor: '#3b82f6',
 },
 image:{
   width: 60,
   height: 60,
   position: 'absolute',
   top: 120,
   right: 20,
   backgroundColor: '#fff',
 },
 boton:{
   backgroundColor: '#FF82AA',
   paddingVertical:10,
   marginHorizontal:20,
   borderRadius:10,
 
 },
 botonLabel:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
 },
});
