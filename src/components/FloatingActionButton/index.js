import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

import {colors} from '../../utils';

const FloatingActionButton = ({onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  text: {fontSize: 30, color: colors.white},
});

export default FloatingActionButton;
