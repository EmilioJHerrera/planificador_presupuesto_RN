import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import NuevoPresupuesto from './components/NuevoPresupuesto';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto />
      </View>
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
});
