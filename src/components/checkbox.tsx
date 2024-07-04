import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, onChange}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checked)}>
      <View
        style={[
          styles.checkbox,
          {
            backgroundColor: checked ? '#06d' : 'transparent',
            borderColor: checked ? '#06d' : '#ccc',
          },
        ]}>
        {checked && <Icon name="check" size={15} color="#fff" />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Checkbox;
