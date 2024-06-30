import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {formatCurrency} from '../helpers/formatCurreny';

type ProductProps = {
  item: {
    thumbnail: string;
    title: string;
    price: number;
  };
};

const Product: React.FC<ProductProps> = ({item}) => {
 

const handlePress = () => {
  
}

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.thumbnail,
        }}
        onError={error =>
          console.log('Image Load Error:', error.nativeEvent.error)
        }
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item?.title} </Text>
        <Text style={styles.price}>{formatCurrency(item?.price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
  },
  image: {
    width: 150,
  },
  info: {
    padding: 20,
    flex: 1,
  },
  price: {
    fontSize: 22,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
  },
});
