import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Product from './product';
import {ProductInterface} from '../types/types';

interface Props {
  data: ProductInterface[];
}

const ListOfProducts: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => <Product item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ListOfProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
