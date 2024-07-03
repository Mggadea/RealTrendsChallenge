import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({label, checked, onChange}) => {
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
      <Text style={styles.label}>{label}</Text>
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
  label: {
    marginLeft: 8,
  },
});

export default Checkbox;
