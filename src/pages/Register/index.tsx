/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
// import {app} from '../../../config/firebase';
import { Gap,TextInput,Button,PageHeader} from '../../components';
import { Arrow } from '../../assets/icon';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        label="Sign Up"
        back={true}
        onPress={() => navigation.goBack()}
      />
     
      <View style={styles.containerwrapper}>
      <TextInput
          label="Username"
          placeholder="Type your name here"
        />
      <Gap height={12} />
      <TextInput
          label="Email"
          placeholder="Type your email here"
        />
      <Gap height={12} />
      <TextInput
          label="Password"
          placeholder="Type your password here"
        />
      <Gap height={20} />
      <View style={styles.minicontainer}>
      <Text >Already have an account?   </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Arrow/>
      </TouchableOpacity>
      </View>
      <Gap height={28} />
      <Button
           label="Sign Up"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,

  },
  containerwrapper:{
    paddingHorizontal: 30,
    width: '100%',
    height: '100%',
    alignContent:"center",
    flex: 1,
    paddingTop: 73,
  },
  minicontainer:{
    alignSelf:'flex-end',
    flexDirection:'row',
  }
});

export default Register;
