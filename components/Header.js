import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return ( 
        <View>

            <Text style={styles.text}> Control de gastos </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    
    text:{
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
export default Header;
