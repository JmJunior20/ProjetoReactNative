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
import Perfil from './screens/Perfil';



const Tab = createBottomTabNavigator();

function MyTabs () {
  
  return (
      <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
    }}>          
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => ( 
          <Icon name="home" color={color} size={25} />
          ),
        }}
      />        
      <Tab.Screen 
        name="Sacola" 
        component={BagStack} 
        options={{
            tabBarLabel: 'SACOLA',
          tabBarIcon: ({color}) => (
          <Handbag name="handbag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={PerfilStack} 
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
      <Stack.Navigator initialRouteName="Login"> 
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/> 
          <Stack.Screen name="Teste" component={MyTabs} options={{ headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>         
    </NavigationContainer>
  );
};

function HomeStack () {
  return (           
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
          <Stack.Screen name="Detalhes" component={Product}/>
      </Stack.Navigator>
  );
};

function BagStack () {
  return (           
      <Stack.Navigator initialRouteName="Bag">
          <Stack.Screen name="Bag" component={Bag} options={{ headerShown: false}}/>
          <Stack.Screen name="End" component={End} options={{ headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      </Stack.Navigator>
  );
};

function PerfilStack () {
  return (           
      <Stack.Navigator initialRouteName="Perfil">
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
      </Stack.Navigator>
  );
};