
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {formatCurrency} from '../helpers/formatCurreny';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Moto G6 Plus 4gb/64gb Reacondicionado
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://http2.mlstatic.com/D_700299-MLA76251159053_052024-O.jpg',
        }}
        onError={error =>
          console.log('Image Load Error:', error.nativeEvent.error)
        }
      />
      <Image />
      <Text style={styles.priceText}>{formatCurrency(140000)}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  titleText: {
    fontSize: 18,
    
    marginVertical: 20,
    },
  priceText: {
    fontSize: 30,

  },
});
