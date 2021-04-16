import React from 'react';

import AppSwitchNavigator from '../AppSwitchNavigator';
import useAppRouter from './UseAppRounter';
import WebViewApp from '../../Screens/Web/WebViewApp';

export default function(){
    useAppRouter();
    return(
        <AppSwitchNavigator/>
    )
}