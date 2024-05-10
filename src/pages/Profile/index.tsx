import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Homescreen,
  Headline,
  Homelogo,
  Profilelogo,
  Orderlogo,
  User,
  Enter,
} from '../../assets/icon';
import {Gap, PageHeader} from '../../components';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PageHeader
        label="My profile"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container1}>
        <View style={styles.profile}>
          <User />
          <View style={styles.userInfo}>
            <Text style={{fontSize: 18, color: 'black'}}>Name</Text>
            <Text>********@gmail.com</Text>
          </View>
        </View>
        <Gap height={58}/>
        <View style={styles.container2}>
         <View style={styles.innercontainer2}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
          <Text style={{fontSize:16, fontWeight:'700', color:'black'}}>My Orders</Text>
          <Gap height={48}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Text style={{fontSize:16, fontWeight:'700', color:'black'}}>Payment Methods</Text>
          <Gap height={48}/>
          </TouchableOpacity>
          <Text style={{fontSize:16, fontWeight:'700', color:'black'}}>Settings</Text>
          <Gap height={48}/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={styles.footerButton}>
              <Orderlogo width={-20} />
              <Text>Order</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={styles.footerButton}>
              <Profilelogo width={-20} />
              <Text style={styles.addText}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  container1: {
    paddingHorizontal: 17,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  innercontainer2: {
    marginleft: 20,
    justifyContent:'space-between'
  },
  profile: {
    flexDirection: 'row',
  },
  userInfo: {
    marginLeft: 17,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eef3fc',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  footerButton: {
    paddingHorizontal: 10,
  },
  addText: {
    fontSize: 14,
  },
});
