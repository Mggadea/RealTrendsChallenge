/* eslint-disable no-catch-shadow */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {formatCurrency} from '../helpers/formatCurreny';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Carousel from '../components/carousel';

const DetailsScreen = () => {
  const route = useRoute();
  const {id} = route.params;
  const navigation = useNavigation();

  const [data, setData] = useState<Array>([]);
  const [description, setDescription] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      title: data.id,
    });
  }, [data]);

  useEffect(() => {
    const apiUrl = `https://api.mercadolibre.com/items/${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const apiUrl = `https://api.mercadolibre.com/items/${id}/description`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setDescription(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Carousel images={data.pictures} />
          <Text style={styles.priceText}>{formatCurrency(data.price)}</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.description}>{description?.plain_text}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {},
  titleText: {
    fontSize: 18,

    marginVertical: 20,
  },
  priceText: {
    fontSize: 30,
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
  descriptionContainer: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    marginTop: 20,
  },
});
