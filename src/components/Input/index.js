import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const Input = ({placeholder, label, value, onChangeText, numeric}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        keyboardType={numeric ? 'numeric' : 'default'}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    marginBottom: 10,
    color: colors.black,
  },
  textInput: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: colors.gray,
  },
});

export default Input;
