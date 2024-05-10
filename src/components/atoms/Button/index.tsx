import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { BackButton } from '../../../assets/icon';
const index = ({
  label,
  backgroundColor = '#803d3b',
  textColor = '#ffff',
  onPress,
  type,
  icon, 
  size = 343,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor, size)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: (backgroundColor, size) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: 20,
    width:size,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});
