/* eslint-disable no-catch-shadow */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar';
import Product from '../components/product';


const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchText] = useState<string>('');

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
    <View style={styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <FlatList
      style={{flex:1,}}
        data={filteredData}
        renderItem={({item}) => <Product item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});
