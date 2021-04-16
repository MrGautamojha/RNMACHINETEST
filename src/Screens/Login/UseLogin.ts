import React from 'react';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../Redux/appAction';

export default function UseLogin(){
    const dispatch=useDispatch();
    type FormData={
        FirstName:string,
        LastName:string,
        Password:string,
        EmailAddress:string,
        PhoneNumber:string,
        Redeem:string
        
    }
    const onChange = (args: any) => args[0].nativeEvent.text
    const doLogin=async ()=>{
       const body =form.getValues();
    //    console.log("1");
       await AsyncStorage.setItem('UserData',JSON.stringify(body));
       dispatch(updateAppState('loggedIn',true));
      
        console.log("Data......",body);
        
    }
    const form=useForm<FormData>({
        mode:'onChange',defaultValues:{
            FirstName:'',
            LastName:'',
            Password:'',
            EmailAddress:'',
            PhoneNumber:'',
            Redeem:''
            
        }
    })
    return{onChange,doLogin,form}
}