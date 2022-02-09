import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = props => {
  return <Text style={{...props.style, ...styles.title}}>{props.children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  }
});

export default TitleText;