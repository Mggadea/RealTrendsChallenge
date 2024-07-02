import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface SearchBarProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({searchText, setSearchText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Filtrar </Text>
        <Icon name="chevron-down"  color='red' size={22} />
      </TouchableOpacity>
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
