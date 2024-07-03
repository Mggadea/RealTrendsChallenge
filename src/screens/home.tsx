/* eslint-disable no-catch-shadow */
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import Product from '../components/product';
import {SafeAreaView} from 'react-native';
import ListOfProducts from '../components/listOfProducts';

type Condition = 'new' | 'used' | '';

const HomeScreen = () => {
  const [data, setData] = useState<Array>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState<string>('');

  const [condition, setCondition] = useState<Condition>('new');

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

  const filteredData = data.filter(item =>
    item?.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#ffe600'}} />
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
});
