/* eslint-disable prettier/prettier */
import {Payment,Opening, Login, Register, Home, Profile, Order, History} from '../pages';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Opening"
        component={Opening}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />     
    <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
    <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />  
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
