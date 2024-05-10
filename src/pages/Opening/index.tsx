/* eslint-disable prettier/prettier */
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Logo } from '../../assets/index';
import { Gap } from '../../components/atoms';
const Opening = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <Image source={Logo} />
    <Gap height={58}/>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Login')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <Gap height={20}/>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('Register')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.textStyle}>REGISTER</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Opening;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a23232',
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 331,
    height: 215,
  },
  buttonContainer: {
    width: 320,
    height: 47,
    backgroundColor: '#F54749',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  },
  containerForLine: {
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textOr: {
    marginHorizontal: 6,
    color: 'white',
    marginVertical: 8,
  },
  line1: {
    marginLeft: -12,
  },
});
