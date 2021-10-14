import React from 'react';
//import HomeStack from './HomeStack';
//import AboutStack from './AboutStack';
//import ContactStack from './ContactStack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Perros from '../Screens/Perros';
import Gatos from '../Screens/Gatos';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator screenOptions={{headerTitleAlign: 'center'}}>
   <Tab.Screen
        name="Gatos"
        component={Gatos}
        options={{
          tabBarLabel: 'Gatos',
           headerStyle: {
            backgroundColor: '#42A5F5',
          },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" color={color} size={size} />
          ),
        }}
      />

     <Tab.Screen
        name="Perros"
        component={Perros}
        options={{
          tabBarLabel: 'Perros',
           headerStyle: {
            backgroundColor: '#42A5F5',
          },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
            
          ),
        }}
      />   



</Tab.Navigator>
);
}