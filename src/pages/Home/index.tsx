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
} from '../../assets/icon';
import {ProductA, ProductB} from '../../assets/index';
import {Button, Gap} from '../../components';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container1}>
          <Gap height={23} />
          <Headline width={200} height={42} />
          <Homescreen width={421} height={510} />
          <Button size={160} label="Check" onPress={() => navigation.navigate('History')} />
        </View>
        <Gap height={44} />
        <Text style={{fontSize: 34, color: 'black', fontWeight: '700'}}>
          New
        </Text>
        <Gap height={18} />
        <View style={styles.container2}>
          <View style={styles.row}>
            <Image source={ProductA} style={styles.product} />
            <Gap width={16} />
            <Image source={ProductB} style={styles.product} />
          </View>
          <Gap height={16} />
          <View style={styles.row}>
            <Image source={ProductA} style={styles.product} />
            <Gap width={16} />
            <Image source={ProductB} style={styles.product} />
          </View>
          <Gap height={16} />
          <View style={styles.row}>
            <Image source={ProductA} style={styles.product} />
            <Gap width={16} />
            <Image source={ProductB} style={styles.product} />
          </View>
        </View>
      </ScrollView>
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  container1: {
    flex: 1,
    backgroundColor: '#ffff',
    position: 'relative',
  },
  container2: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 24,
    // flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  product: {
    width: 150,
    height: 200,
    marginHorizontal: 17,
    borderRadius: 15,
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
