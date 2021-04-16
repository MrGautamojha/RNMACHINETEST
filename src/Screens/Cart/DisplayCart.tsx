import React, {useEffect, useState} from 'react';
import {Container, Click, Spacer, Body} from 'rnfui';
import {useSelector, useDispatch} from 'react-redux';

import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import scaler from '../../Utilities/scaler';

import {Divider} from 'react-native-paper';
import AIcon from 'react-native-vector-icons/AntDesign';
import {Value} from 'react-native-reanimated';
import AppButton from '../../Components/Shared/AppButton/Appbutton';
import {MY_ORDER} from '../../Redux/types';

const {width, height} = Dimensions.get('screen');

export default function DisplayCart(props: any) {
  const {cart} = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [getAvailable, setAvailable]: any = useState('');
  const data = Object.values(cart);
  console.log('dddd', data);
  console.log('cart-----------------', cart);
  function myOrder(cart: any) {
    console.log('ssssss----------------', cart);

    return async () => {
      let body = {
        categoryid: 'gautam',
      };
      console.log('llllllllllll');

      const result = await postDataAxios('MyOrder/addToMyOrder', body);
      console.log(result.success);
      return {type: MY_ORDER, payload: result};
    };
  }

  useEffect(() => {}, [cart]);

  function Item({item, props}: any) {
    const updateData = (item: any, value: any) => {
      console.log('update', item, value);

      item['totalamount'] = item.price * value;
      item['quantity'] = value;
      dispatch({type: 'ADD_TO_CART', payload: [item.id, item]});
    };
    return (
      <View>
        <View style={{padding: scaler(5)}}>
          <Spacer size={20} />
          <View style={styles.item}>
            {/* <Click onPress={()=>{props.navigation.navigate("DetailBook",{item:item})}}> */}
            <View style={{flexDirection: 'row'}}>
              <View style={{marginLeft: scaler(0)}}>
                {/* console.log("aaaa",item); */}
                {/* <Text>{item.authorinfo}</Text> */}
                {/* <Image
                  resizeMode={'contain'}
                  style={{height: scaler(100), width: scaler(109)}}
                  source={{uri: `${BaseURL}/images/${item.image}`}}
                /> */}
              </View>
              <Text style={{fontWeight: '500'}}>{item.title}</Text>
            </View>
            <View style={{padding: scaler(5)}}>
              <View style={{flexDirection: 'row', marginTop: scaler(-55)}}>
                <Text
                  style={{
                    fontWeight: '500',
                    color: 'rgba(0,0,0,0.4)',
                    marginLeft: scaler(120),
                  }}>
                  {`${item.language}`}
                </Text>
                <Spacer horizontal={true} />
                <Text style={{fontWeight: '500', color: 'rgba(0,0,0,0.4)'}}>
                  ,
                </Text>
                <Spacer horizontal={true} />
                <Text style={{fontWeight: '500', color: 'rgba(0,0,0,0.4)'}}>
                  {item.publisher}
                </Text>
              </View>
              <View></View>
              <Spacer size={25} />

              <View style={{flexDirection: 'row', padding: scaler(10)}}>
                <Text>Quantity :</Text>
                <Spacer horizontal={true} />
                
                <View style={{marginLeft: scaler(180)}}>
                  <Text style={{fontSize: scaler(30)}}>{'\u20B9'}</Text>
                </View>
                <View>
                  <Text style={{fontSize: scaler(30), fontWeight: 'bold'}}>
                    {item.totalamount}
                  </Text>
                </View>
              </View>
            </View>
            {/* <Spacer size={20} /> */}
            <Divider style={{height: scaler(3)}} />
            <Spacer />

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Click
                onPress={() => {
                  dispatch({
                    type: 'DELETE_FROM_CART',
                    payload: [item.id],
                  });
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <AIcon name={'delete'} size={20} />
                  </View>

                  <Spacer />
                  <Text> DELETE</Text>
                </View>
              </Click>
            </View>
          </View>
          <Spacer />

          {/* <Spacer size={20} /> */}
        </View>
        <Divider style={{height: scaler(15)}} />
      </View>
    );
  }
  const total = data.map((item: any) => {
    let data = 0;
    data = data + parseInt(item.totalamount);
    return data;
  });
  var sum = total.reduce(function (a: number, b: number) {
    return a + b;
  }, 0);

  return (
    <Container>
      <Body>
        {data.length != '' ? (
          <View style={{padding: scaler(15)}}>
            <FlatList
              data={data}
              renderItem={({item}) => <Item item={item} props={props} />}
            />

            <Spacer size={30} />
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              PRICE DETAILS
            </Text>
            <Divider style={{height: scaler(3)}} />

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 5}}>
                {total.length > 1 ? (
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    Price ({total.length} items)
                  </Text>
                ) : (
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    Price ({total.length} item)
                  </Text>
                )}
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>{sum}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 5}}>
                <Text style={{fontSize: 15, fontWeight: '500'}}>Delivery</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 15, fontWeight: '500', color: 'green'}}>
                  Free
                </Text>
              </View>
            </View>
            <Divider style={{height: scaler(5)}} />
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 5}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Total Price
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{sum}</Text>
              </View>
            </View>
            <Spacer size={20} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Click
                onPress={async () => {
                  dispatch(await myOrder(cart));
                }}>
                <AppButton
                  children={'Place Order'}
                  style={{width: width / 3}}
                />
              </Click>
            </View>
          </View>
        ) : (
          <View>
           
          </View>
        )}
      </Body>
    </Container>
  );
}
const styles = StyleSheet.create({
  item: {
    borderColor: '#d1ccc0',
    backgroundColor: '#ffffff',
    padding: scaler(10),
    borderRadius: 10,
    width: 'auto',
    // height: scaler(270),
    // borderWidth: 1,
    elevation: 2,
    flex: 1,
  },
});
