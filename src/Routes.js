import React from 'react';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';


import MyProfile from './pages/myProfile';
import MyVehicles from './pages/myVehicles';
import MyVehicles2 from './pages/myVehicles2';
import Ligar from './pages/ligar';


import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="MyVehicles" component={MyVehicles} />
        <Stack.Screen name="MyVehicles2" component={MyVehicles2} />
        </Stack.Navigator>
    
    );
    
  }

export default function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{headerTransparent: true}}
            tabBarOptions={{
                style:{
                    backgroundColor: '#282F66'
                },
                activeTintColor: '#282F66'
            }}
        >
            <Tab.Screen name = "MyProfile" component = {MyProfile} 
            options={{title: '', tabBarIcon: ({size, color}) => (
                <AntDesign name="user" size={size} color={color}/>
                )
            }}/>
             <Tab.Screen name = "Ligar" component = {Ligar} 
            options={{title: '', tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="robot" size={size} color={color} />
                )
            }}/>
            <Tab.Screen name = "MyVehicles" component = {MyVehicles} 
            options={{title: '', tabBarIcon: ({size, color}) => (
                <FontAwesome5 name="car" size={size} color={color}/>
                )
            }}/>
        </Tab.Navigator>

        
    )
}
