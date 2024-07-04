import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Checkbox from './checkbox';

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
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Icon name="search" color="#ccc" size={18} />

        <TextInput
          placeholder="Usa el buscador para encontrar productos"
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

      <Modal
        style={{flex: 1}}
        animationType="fade"
        transparent={true}
        visible={isModalVisible}>
        <Pressable
          onPress={() => setIsModalVisible(false)}
          style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          <Icon
            name="triangle"
            color="#fff"
            size={25}
            style={{position: 'absolute', top: 95, right: 25}}
          />

          <View style={styles.modalContainer}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>Condición</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setCondition('new')}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Nuevo</Text>
                <Checkbox
                  checked={condition == 'new'}
                  onChange={() => setCondition('new')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCondition('used')}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Usado</Text>
                <Checkbox
                  checked={condition == 'used'}
                  onChange={() => setCondition('used')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
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

  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    top: 105,
    right: 20,
    width: '60%',
    position: 'absolute',
  },
  modalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  modalText: {
    marginLeft: 10,
    fontWeight: '500',
  },
  modalButton: {
    height: 50,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
