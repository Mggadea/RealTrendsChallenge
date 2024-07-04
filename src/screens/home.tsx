/* eslint-disable no-catch-shadow */
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import {SafeAreaView} from 'react-native';
import ListOfProducts from '../components/listOfProducts';
import {Condition, ProductInterface} from '../types/types';

const HomeScreen = () => {
  const [data, setData] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const [searchText, setSearchText] = useState<string>('');

  const [condition, setCondition] = useState<Condition>('');

  useEffect(() => {
    const apiUrl =
      'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (item: ProductInterface) =>
      item?.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (condition === '' || item?.condition === condition),
  );

  return (
    <>
      <SafeAreaView style={styles.safeAreaStyle} />
      <View style={styles.container}>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          condition={condition}
          setCondition={setCondition}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ListOfProducts data={filteredData} />
        )}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeAreaStyle: {
    backgroundColor: '#ffe600',
  },
});
