import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios';
import SearchBar from '../components/searchBar';
import Product from '../components/product';


const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6';
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

  
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({item}) => <Product item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',

  }
})