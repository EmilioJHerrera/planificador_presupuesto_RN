import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

import  globalStyles  from '../styles';

const Auth = ({navigation,route}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registed, setRegisted] = useState(false);

  const handleValidateEmail = (text) => {
    const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i);
    if(!emailRegex.test(text)){
      console.log('email no valido');
      Alert.alert('Email no valido', 'Revise el email introducido',[{text: 'OK'}]);
    }
  }
  
  const handleValidatePass = (text)=> {
   const passwdRegex = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/i);
    if (passwdRegex.test(text)) {
    console.log('correcto');
    }else{
      console.log('incorrecto');
      Alert.alert('Contraseña no valida', 'Debe tener mínimo 6 caracteres, 1 mayúscula, 1letra y 1 número',[{text: 'OK'}]);
    }
  }
  
  return (
    <View style={styles.container}>
        
        <View style={styles.formContainer}>
{registed? <Text style={styles.title}>Login</Text>:<Text style={styles.title}>Registro</Text>}
{/* 
        <Text style={styles.title}>Registro</Text> */}

        <View style={styles.campo}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                    keyboardType='email-address'
                    style={styles.input}
                    placeholder='emilio@text.com'
                    value={email}
                    onChangeText={setEmail}/>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='********'
                    value={password}
                    onChangeText={setPassword}/>
                </View>

         {!registed? (
         <View style={styles.btnContainer}>
                <Button title="validaPAss" onPress={() => {handleValidatePass(password)}} />
                <Button title="Ya estoy registrado" onPress={() => {setRegisted(true)}} />          
              <Button title="Go to Main" onPress={() => {navigation.navigate("Main");}} />
                  </View>
                  ):(
          <View style={styles.btnContainer}>
                <Button title="Registrarme" onPress={() => {setRegisted(false)}} />
              <Button title="Go to Main" onPress={() => {navigation.navigate("Main");}} />
                  </View>
                  )}
         
                {/* <View style={styles.btnContainer}>
                <Button title="validaPAss" onPress={() => {handleValidatePass(password)}} />
                <Button title="Ya estoy registrado" onPress={() => {setRegisted(true)}} />          
        <Button title="Go to Main" onPress={() => {navigation.navigate("Main");}} />
                  </View> */}


        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3b82f6',
    
    justifyContent:'center'
  },
  formContainer:{
    ...globalStyles.container,
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
btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
},

});
export default Auth;