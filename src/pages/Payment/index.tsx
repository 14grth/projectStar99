import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { BackButton, Card, Card2 } from '../../assets/icon'
import { Button, Gap } from '../../components'
import CheckBox from 'react-native-check-box'

const Payment = ({ navigation }) => {
  const [isCheckedCard1, setIsCheckedCard1] = useState(false)
  const [isCheckedCard2, setIsCheckedCard2] = useState(false)
  const [defaultChecked, setDefaultChecked] = useState(null)

  const handleCheckboxChangeCard1 = () => {
    setIsCheckedCard1(!isCheckedCard1)
    if (!isCheckedCard1) {
      setDefaultChecked(1)
    } else {
      setDefaultChecked(null)
    }
  }

  const handleCheckboxChangeCard2 = () => {
    setIsCheckedCard2(!isCheckedCard2)
    if (!isCheckedCard2) {
      setDefaultChecked(2)
    } else {
      setDefaultChecked(null)
    }
  }
  return (
    <View style={styles.container}>
      <Gap height={20}/>
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
            marginLeft: 90,
          }}
        >
          Payment Methods
        </Text>
      </View>
      <View style={styles.content}>
        <Gap height={42} />
        <Text style={{ fontSize: 16, color: 'black', fontWeight: '400' }}>
          Your payment cards
        </Text>
        <Image source={Card} />
        <CheckBox
          onClick={handleCheckboxChangeCard1}
          isChecked={isCheckedCard1}
          rightText={"Use as default payment methods"}
        />
        <Image source={Card2} />
        <CheckBox
          onClick={handleCheckboxChangeCard2}
          isChecked={isCheckedCard2}
          rightText={"Use as default payment methods"}
        />
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
})