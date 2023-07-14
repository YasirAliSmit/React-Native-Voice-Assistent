import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
const QrCode = () => {
  return (
    <QRCode
    value="Nothing is Here"
    
    logoSize={10}
    logoBackgroundColor='transparent'
  />
  )
}

export default QrCode

const styles = StyleSheet.create({})