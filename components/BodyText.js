import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = props => (
  <Text style={{...props.style, ...styles.body}}>{props.children}</Text>
)

const styles = StyleSheet.create({
  body: {

  }
});

export default BodyText;
