import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap} from '../../components';
import {Card} from 'react-native-elements';
import {ProductC} from '../../assets';
import {Nominal, Unloadcard, Unloadcardbig} from '../../assets/icon';
const History = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Gap height={20} />
      <View style={styles.header}>
        <Button
          type="icon-only"
          icon="icon-back"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'black',
            marginLeft: 100,
          }}>
          Order History
        </Text>
      </View>
      <Gap height={81} />
      <Card containerStyle={styles.card}>
        <View style={styles.productcontainer}>
          <Image
            source={ProductC}
            style={{width: 100, height: 100, marginEnd: 16}}
          />
          <View style={styles.textcontainer}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              Desert show cafe
            </Text>
            <Text>Jul 15, 2021 - 11:05AM </Text>
            <Text style={{color: 'green', textAlign: 'center'}}>
              Deliverd ✓
            </Text>
          </View>
        </View>
      </Card>
      <Gap height={61} />
      <View style={styles.containerPayment}>
        <Text>Payment</Text>
        <Text>Change</Text>
      </View>
      <Gap height={24} />
      <View style={styles.containerPayment}>
        <Unloadcard />
        <Nominal width={150} height={75} />
      </View>

      <Gap height={51} />
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          fontWeight: '700',
          paddingLeft: 10,
        }}>
        Delivery Method
      </Text>
      <View style={styles.containerDeliviery}>
        <Unloadcardbig />
        <Unloadcardbig />
        <Unloadcardbig />
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text> Order:</Text>
        <Text> Delivery:</Text>
        <Text style={{fontWeight: '900'}}> Summary: </Text>
        <Gap height={23} />
        <Button label="Submit Order" />
      </View>
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  card: {
    width: 375,
    height: 89,
    paddingTop: -30,
    elevation: 10,
    borderRadius: 12,
  },
  productcontainer: {
    flexDirection: 'row',
  },
  textcontainer: {
    flexDirection: 'column',
  },
  containerPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  containerDeliviery: {
    paddingHorizontal: 0,
    flexDirection: 'row',
  },
});
