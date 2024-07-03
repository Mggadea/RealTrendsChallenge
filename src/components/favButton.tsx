import {StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavButton = () => {
const [isPressed, setIsPressed] = useState(false)


  return (
    <TouchableOpacity  onPress={()=>setIsPressed(!isPressed)} style={styles.container}>
      
      <Icon name={isPressed ? 'heart' : 'heart-o' } color="#3a86ff"  size={15}/>
    </TouchableOpacity>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
