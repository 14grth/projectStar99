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

// import {Logo} from '../../assets';


// const auth = getAuth(app);
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
      navigation.navigate('Profile', {uid:user.uid})
      console.log('Logged in user:', user);
      // navigation.replace('Homepage');
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
          placeholder="Type your email address"
        />
      <Gap height={12} />
      <TextInput
          label="Password"
          placeholder="Type your password address"
        />
      <Gap height={36} />
      <Button
           label="LOGIN"
          onPress={() => navigation.navigate('Home')}
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
