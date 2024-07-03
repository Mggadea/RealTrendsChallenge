import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Product from './product';

const ListOfProducts = ({data}) => {
  return (
    <>
      <FlatList
        style={{flex: 1, width: '100%'}}
        data={data}
        renderItem={({item}) => <Product item={item} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default ListOfProducts;

const styles = StyleSheet.create({});
