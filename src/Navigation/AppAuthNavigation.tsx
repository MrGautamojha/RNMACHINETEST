import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import AppTabNavigation from './AppTabNavigation';
import PaperForm from '../../src/Screens/PaperForm/PaperForm';
import ProductDetail from '../../src/Screens/PaperForm/ProductDetail';
import AppHeaderMain from '../../src/Components/Shared/AppHeaderMain/AppHeaderMain';
import DisplayCart from '../../src/Screens/Cart/DisplayCart';



export default function AppAuthNavigation(){
    const Auth=createStackNavigator();
    return(
           <Auth.Navigator >
                <Auth.Screen  name={'AppTab'}  options={{ header: AppHeaderMain}} component={PaperForm}/>
                <Auth.Screen  name={'DetailTab'}  options={{ header: AppHeaderMain}} component={ProductDetail}/>
                <Auth.Screen  name={'DisplayCart'}  options={{ header: AppHeaderMain}} component={DisplayCart} />
          
            </Auth.Navigator>
  
    )
}