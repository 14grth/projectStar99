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
import {createAccount} from '../../../config/firebase';
import { Gap,TextInput,Button,PageHeader} from '../../components';
import { Arrow } from '../../assets/icon';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, set, ref} from 'firebase/database';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onPressRegister = async () => {
    try {
      await createAccount({email, password, name})
      Alert.alert(
        'You have successfully registered, You can login now',
      );
    } catch (error) {
      Alert.alert('Registration failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <PageHeader
        label="Sign Up"
        back={true}
        onPress={() => navigation.goBack()}
      />
     
      <View style={styles.containerwrapper}>
      <TextInput label="Username"placeholder="User Name" value={name} onChangeText={setName} />
      <TextInput
      label="Email"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
      label="Password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
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
           onPress={onPressRegister}
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
