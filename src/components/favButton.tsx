import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavButton = ({onPress, isFavorite}) => {


  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={isFavorite ? 'heart' : 'heart-o'} color="#3a86ff" size={15} />
    </TouchableOpacity>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
