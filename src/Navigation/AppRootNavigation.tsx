import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login/Login';
import PaperForm from '../Screens/PaperForm/PaperForm';


export default function AppRootNavigation(){
    const Root=createStackNavigator();

    return(
       
            <Root.Navigator initialRouteName={'Login'} headerMode={'none'}>
                <Root.Screen name={'Login'} component={Login}/>
                <Root.Screen name={'Paper'} component={PaperForm}/>
            </Root.Navigator>
       
    )
}