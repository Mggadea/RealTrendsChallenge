import {StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const FavButton = ({handlePress}) => {

  return (
    <TouchableOpacity
    onPress={handlePress}
    style={styles.container}>
      <Icon name="favorite" color="#3a86ff" />
    </TouchableOpacity>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
