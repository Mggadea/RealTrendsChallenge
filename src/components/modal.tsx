import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import Checkbox from './checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalFilter = ({
  isModalVisible,
  setIsModalVisible,
  setCondition,
  condition,
}) => {
  return (
    <>
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
    </>
  );
};

export default ModalFilter;

const styles = StyleSheet.create({
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
  modalButtonText: {
    color: '#666',
  },
});
