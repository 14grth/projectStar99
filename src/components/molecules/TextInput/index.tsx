import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({ placeholder, label, value,
  onChangeText,
  keyboardType,
  secureTextEntry,}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    fontSize: 14,
    padding: 10,
  },
});
