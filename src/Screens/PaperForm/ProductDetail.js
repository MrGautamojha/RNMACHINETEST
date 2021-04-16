import React, { useState } from "react";
import { FlatList, SafeAreaView,View, StatusBar, StyleSheet, Text, Button,TouchableOpacity,Image } from "react-native";
import { useDispatch } from "react-redux";

let value='';
const ProductDetail= (props) => {
const dispatch = useDispatch()
    console.log(props.route,"props")
   
   let  value= props.route.params.item?props.route.params.item:'';
  const [count, setCount] = useState(1);

  const _add = (item, index) => {
setCount(count+1)
  };

  const _minus = (item, index) => {
      if(count>0){
    setCount(count-1)
      }
  };
const _addToCart=(item)=>{
  
    console.log('aaaaaaaa', item);
    item['count'] = count;
    item['totalamount'] = item.price;
    dispatch({type: 'ADD_TO_CART', payload: [item.id, item]});
}

  return (
    <SafeAreaView style={styles.container}>
     <View style={{flex:1,justifyContent:'space-evenly'}}>
     {/* <Image source={{uri:value.image}} style={{height:'30%',width:'100%'}}/> */}
    {/* <Text>{value.title}</Text> */}
    <View style={{flexDirection:'row'}}>
       <TouchableOpacity
          style={{ width: '20%', alignItems: 'center'}}
          onPress={() => _minus()}>
          <Text>{'-'}</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          onPress={() => _add()}
          style={{width: '20%', alignItems: 'center'}}>
          <Text>{'+'}</Text>
        </TouchableOpacity>
        </View>
    <TouchableOpacity  style={{backgroundColor:'pink',width:90,height:50,alignSelf:'center'}}
    onPress={()=>{_addToCart(value)}}
    ><Text style={{textAlign:'center',marginTop:12}}>{'Add to cart'}</Text></TouchableOpacity>
    
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ProductDetail;