import React from 'react';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import {ThemeProvider} from 'rnfui';
import {Provider} from 'react-redux';
import AppRouter from './Navigation/AppRouter/AppRouter';
import PaperTheme from './Config/PaperTheme';
import AppTheme from './Config/AppTheme';
import store from './Redux/store';




function App(){
  return(
    <Provider  store={store}>
    <ThemeProvider value={AppTheme}>
        <PaperThemeProvider theme={PaperTheme}>
    <AppRouter/>
    </PaperThemeProvider>
    </ThemeProvider>
    </Provider>
 )

}
export default App;



