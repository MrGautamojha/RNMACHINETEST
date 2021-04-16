import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import AppAuthNavigation from './AppAuthNavigation';
import AppRootNavigation from './AppRootNavigation';
import Loading from '../Screens/Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { updateAppState } from '../Redux/appAction';


export default function AppSwitchNavigator(){
    const AppStack=createStackNavigator();
    const[token,setToken]=React.useState('')
    const [loading,setLoading]=React.useState(true)
    const {loggedIn} = useSelector((state: any) => state);
    const dispatch=useDispatch();


    const displayLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      };
    
      useEffect(() => {
        displayLoading();
      }, [loggedIn]);
      
      useEffect(() => {
        checkLogin();
      }, []);
    
      const checkLogin = async () => {
        const data = await AsyncStorage.getItem('UserData');
        {
          data == null
            ? dispatch(updateAppState('loggedIn', false))
            : dispatch(updateAppState('loggedIn', true));
        }
      };


    if (loading) {
        return <Loading />;
      }



    return(
      <NavigationContainer>
          <AppStack.Navigator headerMode={'none'}>
              {loggedIn==true?<AppStack.Screen name={"Auth"}  component={AppAuthNavigation}/>: <AppStack.Screen  name={"root"} component={AppRootNavigation}/>}

          </AppStack.Navigator>
      </NavigationContainer>
       
        
        
        
    )

    
}