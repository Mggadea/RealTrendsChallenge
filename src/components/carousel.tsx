import React from 'react';
import {View, FlatList, Image, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const Carousel = ({images}) => {
  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.secure_url,
            }}
            style={styles.image}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 300,
    justifyContent: 'center',
  },
  image: {
    width: width - 40,
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Carousel;
