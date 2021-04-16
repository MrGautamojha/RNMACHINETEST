import React, { useState } from 'react';
import { Container, Spacer, Body, Click } from 'rnfui';
import {Controller,useForm} from 'react-hook-form'
import { View ,Text, StyleSheet, Dimensions,Image,TouchableOpacity, StatusBar} from 'react-native';
import { TextInput, HelperText, Button, DefaultTheme } from 'react-native-paper';
import { ThemeConsumer } from 'rnfui/compiled/dist/Themes/ThemeContext';
import AppTheme from '../../Config/AppTheme';
import { FlatList } from 'react-native-gesture-handler';
// import { Image } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';
import scaler from '../../Utilities/scaler';
const {width, height} = Dimensions.get('screen');

const DATA = [
    {
      id: "1",
      title: "Shirt",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "2",
      title: "Pant",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "3",
      title: "Crockrey",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "4",
      title: "Suitcase",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "5",
      title:"Chair",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "6",
      title: "Table",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "7",
      title: "cpu",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "8",
      title: "Carpet",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
    {
      id: "9",
      title: "phone",
      image:'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      price:40,
    },
  ];

export default function PaperForm(props){

    const [selectedId, setSelectedId] = useState(null);

    const onPress=(item)=>{
      props.navigation.navigate('DetailTab',{item:item})
  }
  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
          <TouchableOpacity onPress={()=>onPress(item)} style={[styles.item, backgroundColor]}>
          <Image source={{uri:item.image}} style={{width:50,height:50,alignSelf:'flex-start'}}/>
          <Text style={[styles.title,{alignSelf:'center',marginLeft:50}]}>{item.title}</Text>
          <View style={{alignSelf:'flex-end'}}>
          <Text style={{fontSize:14}}>{'Rs:'}{item.price}</Text>
        </View>
        </TouchableOpacity>
      );
    };


    // const form=useForm({mode:'onChange'});
    return(<Container >
        <Body style={{padding:20,backgroundColor:'#f2f2f2'}}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />


       
        </Body>
    </Container>)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flex:1,
      flexDirection:'row',
      borderWidth:2,
      borderColor:'black',
     justifyContent:'space-evenly'
    },
    title: {
      fontSize: 32,
    },
  });