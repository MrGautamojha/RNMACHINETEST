import React, {Fragment} from 'react';
import {Container} from 'rnfui';
import Aicon from 'react-native-vector-icons/AntDesign';
import AppTheme from '../../Config/AppTheme';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import scaler from '../../../src/Utilities/scaler';

export default function Cart() {
  const {cart} = useSelector((state: any) => state);
  console.log('sssssssssssss', Object.keys(cart).length);

  return (
    <Container style={{backgroundColor: AppTheme.color.primary}}>
      {Object.keys(cart).length ? (
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#63D795',
            height: 25,
            width: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <Text>{Object.keys(cart).length}</Text>
        </View>
      ) : (
        <Fragment></Fragment>
      )}
      {Object.keys(cart).length ? (
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: scaler(-15),
          }}>
          <Aicon name={'shoppingcart'} color={'#FCEC08'} size={35} />
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 5,
          }}>
          <Aicon name={'shoppingcart'} color={'#FCEC08'} size={35} />
        </View>
      )}
    </Container>
  );
}
