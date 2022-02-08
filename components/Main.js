import { StyleSheet, Text, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import React, {useState, useEffect} from "react";


import { formatearFecha } from '../helpers';

import Header from './Header';
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';
import FormularioGasto from './FormularioGasto';
import ListaGastos from './ListaGastos';
import Filtro from './Filtro';
const Main = () => {
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [presupuesto, setPresupuesto] = useState('');
    const [gastos, setGastos] = useState([]);
    const [modal, setModal] = useState(false);
    const [gasto, setGasto] = useState({});
  
    const [filtro, setFiltro] = useState('');
    const [gastosFiltrados, setGastosFiltrados] = useState([]);
  
    //aqui lee el storage
    useEffect(()=>{
      // const obtenerPresupuesto = async () => {
      //   try {
      //     const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0;
      //     console.log('GetItempresupuestoStorage:',presupuestoStorage);
      //     if(presupuestoStorage > 0){
      //       setPresupuesto(presupuestoStorage);
      //       setIsValidPresupuesto(true);
      //     }
          
      //   } catch (error) {
      //     console.log('error:', error);
      //   }
      //   //console.log('Obtnerpresupuesto:', presupuestoStorage);
      // }
      // obtenerPresupuesto();
  
  
      const obtenerFIREBASE = async () => {
        try {
          const response = await fetch('https://planificador-42b7b-default-rtdb.firebaseio.com/presupuesto.json');
          const respuesta = await response.json();
          console.log('respuestaFIRE:',Object.values(respuesta) );
          console.log('prueba_FIREBASE:', respuesta.presupuesto);
          
          const presupuestoStorage = respuesta.presupuesto;
          if(presupuestoStorage > 0){
            setPresupuesto(presupuestoStorage);
            setIsValidPresupuesto(true);
          }
          // const prueba = Object.values(respuesta);
          // console.log('prueba_FIREBASE:', respuesta.presupuesto); //HAY QUE JUGAR CON EL ARBOL QUE SE GENERA EN FIREBASE
        } catch (error) {
          console.log('errorRespuestaFire:', error);
        }
      }
      obtenerFIREBASE();
  
  
  
    },[]);
  
    // aqui se almacena el presupuesto
    useEffect(()=>{
      // if(isValidPresupuesto){
      //   const guardarPresupuesto = async () => {
      //     try {
      //       await AsyncStorage.setItem('planificador_presupuesto', presupuesto);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   }
      //   console.log('guardadoStorage:', presupuesto);
      //   guardarPresupuesto();
      // };
  
      if (isValidPresupuesto){
        const guardarFIREBASE = async() => {
          try {
            const response = await fetch ('https://planificador-42b7b-default-rtdb.firebaseio.com/presupuesto.json', {
              method: 'PUT',   //cambiar al metodo PUT para que reemplace el existente
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                presupuesto: presupuesto,
                fecha: formatearFecha(Date.now()),
              }),
            });
  
              const respuesta = await response.json();
              console.log('respuesta:', respuesta);
            } catch (error) {
              console.log(error);
          }
        }
        guardarFIREBASE();
      };
      } ,[isValidPresupuesto]);
  
      //obtiene los gastos
  
  
      useEffect(()=>{
        // const obtenerGastos = async () =>{
        //   try {
        //     const gastosStorage = await AsyncStorage.getItem('planificador_gastos');
            
        //     setGastos(gastosStorage ? JSON.parse(gastosStorage) : []);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }
        // obtenerGastos();
  
        const obtenerFIREBASE = async () => {
          try {
            const response = await fetch('https://planificador-42b7b-default-rtdb.firebaseio.com/gastos.json');
            const respuesta = await response.json();
            console.log('___respuestaFIRE_GASTOS:',(respuesta.gastos) );
            console.log('___respuestaFIRE_GASTOS',(respuesta.gastos) );
            setGastos(respuesta.gastos? respuesta.gastos : []);
            console.log('FIREBASEgastos',gastos)
            // const gastosStorage = Object.values(respuesta.gastos);
            // console.log('___repsuesta.keys:',Object.values(respuesta.gastos))
            // setGastos(gastosStorage ? JSON.parse(gastosStorage) : []);
            
          } catch (error) {
            console.log('errorRespuestaFire:', error);
          }
        }
        obtenerFIREBASE();
  
      },[])
  
      //almacena los gastos
      useEffect(()=>{
        // const guardarDatosStorage = async () => {
        //   try {
        //     await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos));
        //   } catch (error){
        //     console.log(error);
        //   }
        // }
        // guardarDatosStorage();
  
  
        const guardarFIREBASE = async () => {
          try {
            const response = await fetch ('https://planificador-42b7b-default-rtdb.firebaseio.com/gastos.json', {
              method: 'PUT',
              headers:{
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                gastos: gastos,
                fecha: formatearFecha(Date.now()),
              })
          })
  
          const respuesta = await response.json();
  
          } catch (error) {
            console.log(error);
          }
        }
        guardarFIREBASE();
  
      },[gastos]);
  
  
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
  
    const handleReset = () => {
      Alert.alert(
        'Resetear todos los valores',
         '¿Continuar?',
          [{text: 'No', style: 'cancel'}, {text: 'Si, eliminar', onPress: async () => {
            try {
              await AsyncStorage.clear();
              setIsValidPresupuesto(false);
              setPresupuesto(0);
              setGastos([]);
            } catch (error) {
              console.log(error);
            }
  
      }}])
    }
      
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <Header />
          {isValidPresupuesto ? 
          <ControlPresupuesto
          gastos = {gastos} 
          presupuesto= {presupuesto}
          handleReset={handleReset}/> :
           <NuevoPresupuesto 
           presupuesto= {presupuesto}
           setPresupuesto ={setPresupuesto}
           handlePresupuesto={handlePresupuesto}/>}
          
        </View>
  
        {isValidPresupuesto && (
        <>
        <Filtro filtro={filtro} setFiltro={setFiltro} gastos={gastos} setGastosFiltrados={setGastosFiltrados}/>
        <ListaGastos gastos={gastos} setModal={setModal} setGasto={setGasto} filtro={filtro} gastosFiltrados={gastosFiltrados}/>
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
  
};

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
  


export default Main;
