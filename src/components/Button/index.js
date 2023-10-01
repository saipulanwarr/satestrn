import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const Button = ({onPress, title}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
  },
  text: {textAlign: 'center', color: colors.white, fontSize: 16},
});

export default Button;
