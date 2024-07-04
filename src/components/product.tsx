import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {formatCurrency} from '../helpers/formatCurreny';
import FavButton from './favButton';
import {useNavigation} from '@react-navigation/native';
import useFavoriteStore from '../store/store';
import {convertToHttps} from '../helpers/convertHttps'

type ProductProps = {
  item: {
    thumbnail: string;
    title: string;
    price: number;
  };
};

const Product: React.FC<ProductProps> = ({item}) => {
  const navigation = useNavigation();

  const {favorites, addFavorite, removeFavorite} = useFavoriteStore();

  const isFavorite = favorites.some(fav => fav.id === item.id);

  const handlePress = () => {
    navigation.navigate('Details', { id: item.id });

  };
  const handleAddFavorite = () => {
    if (isFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: convertToHttps(item?.thumbnail),
          }}
          onError={error =>
            console.log('Image Load Error:', error.nativeEvent.error)
          }
        />

        <FavButton isFavorite={isFavorite} onPress={handleAddFavorite} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item?.title} </Text>
        <Text style={styles.price}>{formatCurrency(item?.price)}</Text>
        <Text style={styles.condition}>
          {item?.condition == 'new' ? 'Nuevo' : 'Usado'}
        </Text>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    borderRadius: 8,
    width: 100,
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 5,
    borderRadius: 10,
  },
  info: {
    padding: 10,
    flex: 1,
  },
  price: {
    fontSize: 22,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
  },
  condition: {
    color: '#6a6a6a',
    fontSize: 14,
    marginTop: 5,
  },
});
