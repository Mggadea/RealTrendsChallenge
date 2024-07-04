import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalFilter from './modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Condition = 'new' | 'used' | '';

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  condition: string;
  setCondition: React.Dispatch<React.SetStateAction<Condition>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  setSearchText,
  condition,
  setCondition,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const value = await AsyncStorage.getItem('firstTime');
        if (value !== null) {
          setIsFirstTime(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkFirstTime();
  }, []);

  const updateFirstTime = async () => {
    try {
      await AsyncStorage.setItem('firstTime', 'false');
      setIsFirstTime(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Icon name="search" color="#ccc" size={18} />

        <TextInput
          placeholder={
            isFirstTime ? 'Usa el buscador para encontrar productos' : 'Buscar'
          }
          onFocus={updateFirstTime}
          style={{marginLeft: 10}}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <TouchableOpacity
        onPress={() => setIsModalVisible(!isModalVisible)}
        style={styles.filterButton}>
        <Text style={styles.filterText}>Filtrar </Text>
        <Icon name="chevron-down" color="#2b2b2b" size={22} />
      </TouchableOpacity>

      <ModalFilter
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setCondition={setCondition}
        condition={condition}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe600',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    flex: 4,
  },
  filterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  filterText: {
    fontWeight: '500',
  },
});
