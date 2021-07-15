import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Handbag from 'react-native-vector-icons/SimpleLineIcons';
import PersonOutline from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Bag from "./screens/Bag";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Product from './screens/Product';
import End from './screens/End';



const Tab = createBottomTabNavigator();

function MyTabs () {
  
  return (
      <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
    }}>          
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => ( 
          <Icon name="home" color={color} size={25} />
          ),
        }}
      />        
      <Tab.Screen 
        name="Sacola" 
        component={Bag} 
        options={{
            tabBarLabel: 'SACOLA',
          tabBarIcon: ({color}) => (
          <Handbag name="handbag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{
            tabBarLabel: 'SUA CONTA',
          tabBarIcon: ({color}) => (
          <PersonOutline name="person-outline" color={color} size={25} />
          ),
        }}
      />          
    </Tab.Navigator>
            
  );
}

const Stack = createStackNavigator();

export default function Routes () {
  return (
    <NavigationContainer>             
      <Stack.Navigator>
          <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false}}/>
          <Stack.Screen name="Detalhes" component={Product}/>
          <Stack.Screen name="Contador" component={Bag}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
          <Stack.Screen name="Cadastro" component={Register}/>
          <Stack.Screen name="End" component={End}/>
      </Stack.Navigator>         
    </NavigationContainer>
  );
};