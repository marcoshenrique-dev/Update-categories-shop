
import React from 'react';
import { View , Text , StyleSheet , Image} from 'react-native';

export default function Categories (props){

  return(
    
      <Image style={style.box} source={{uri : props.image}}></Image>
  );

}

const style = StyleSheet.create({

  box : {

   
    borderRadius : 10,
    width : 100,
    height : 80,
    marginLeft : 20,
    flex : 1,
    
  },

 

});