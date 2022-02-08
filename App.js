//import 'react-native-gesture-handler'
import { StyleSheet, View} from 'react-native';
import React from "react";

import Main from './components/Main';
import MainNavigation from './navigation/MainNavigation';

export default function App() {
    
  return (
    <View style={styles.container}>
     <MainNavigation/>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
  }
  
});
