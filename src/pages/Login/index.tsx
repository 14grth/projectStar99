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
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../../config/firebase';
import { Gap,TextInput,Button,PageHeader} from '../../components';
const auth = getAuth(app);
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log('Logged in user:', user);
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Login failure', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <PageHeader
        label="Login"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.containerwrapper}>
      <TextInput
      label="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Gap height={22} />
      <TextInput
        label="Password"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Gap height={36} />
      <Button
           label="LOGIN"
           onPress={onPressLogin}
        />
      </View>
    </View>
  );
};

// Styles
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
  // buttonContainer: {
  //   width: 350,
  //   height: 48,
  //   backgroundColor: '#803D3B',
  //   borderRadius: 30,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default Login;
