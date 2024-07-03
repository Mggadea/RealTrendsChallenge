import {StyleSheet, Text, View, Flatlist, SafeAreaView} from 'react-native';
import React from 'react';
import ListOfProducts from '../components/listOfProducts';
import useFavoriteStore from '../store/store';

const FavoritesScreen = () => {
  const {favorites, addFavorite, removeFavorite} = useFavoriteStore();

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length > 0 ? (
        <ListOfProducts data={favorites} />
      ) : (
        <Text>No hay favoritos</Text>
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
