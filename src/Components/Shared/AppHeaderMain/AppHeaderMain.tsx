import React from 'react';
import {Appbar, Headline, useTheme} from 'react-native-paper';
import {Click, useActiveTheme} from 'rnfui';
import {StyleSheet, Alert, AsyncStorage, Platform} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../../Redux/appAction';
import scaler from '../../../../src/Utilities/scaler';
import Cart from '../../../Screens/Cart/Cart';

function AppHeaderMain({scene,navigation}: any) {
  // console.log('scene', scene);
  console.log('scene', scene);
  const headerTitle = scene.route.name;
  const dispatch=useDispatch();
  const Theme = useActiveTheme();

  const styles = StyleSheet.create({
    titleStyle: {
      color: Theme.color.white,
    },
  });
  const clear =async ()=>{
    await AsyncStorage.removeItem('UserData');
    dispatch(updateAppState('loggedIn',false))
  }

  return (
    <Appbar.Header>
      <Appbar.Action icon={'menu'} ></Appbar.Action>
        <Appbar.Content
        title={scene.route.name}
        titleStyle={{
          fontFamily: 'Poppins-SemiBold',
          marginBottom: scaler(-5),
          fontWeight: '500',
          fontSize: scaler(40),
        }}
      />
      <Click onPress={()=>{navigation.navigate("DisplayCart",{navigation:navigation})}}  >
        <Cart/>
      </Click>
        <Appbar.Action icon={'logout'}  onPress={()=>{clear()}}></Appbar.Action>
    </Appbar.Header>
  );
}

export default AppHeaderMain;
