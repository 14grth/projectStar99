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
  Homelogo,
  Profilelogo,
  Orderlogo,
  Ordermenu,
} from '../../assets/icon';
import {Gap, PageHeader, TransactionCard} from '../../components';

const Order = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <PageHeader
        label="My Orders"
        back={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container1}>
        <Gap height={24}/>
      <Ordermenu/>
      <TransactionCard Ordernum="Order No *****" text="Water, Food" Date="5/10/2024" tracknum="Tracking number: ****" quantity="Quantity: 20" total="Total Amount: $"/>
      <TransactionCard Ordernum="Order No *****" text="Water, Food" Date="5/10/2024" tracknum="Tracking number: ****" quantity="Quantity: 20" total="Total Amount: $"/>
      <TransactionCard Ordernum="Order No *****" text="Water, Food" Date="5/10/2024" tracknum="Tracking number: ****" quantity="Quantity: 20" total="Total Amount: $"/>
      <TransactionCard Ordernum="Order No *****" text="Water, Food" Date="5/10/2024" tracknum="Tracking number: ****" quantity="Quantity: 20" total="Total Amount: $"/>
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

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  container1: {
    paddingHorizontal: 17,
  },
  scrollViewContainer: {
    paddingBottom: 60,
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
