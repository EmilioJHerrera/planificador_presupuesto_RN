import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import Auth from '../components/Auth';
import Main from '../components/Main';


const Stack = createNativeStackNavigator();

const MainNavigation = () => (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
    </Stack.Navigator>
</NavigationContainer>

);

export default MainNavigation;
