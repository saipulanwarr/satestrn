import React from 'react';
import {ActivityIndicator, View, Modal, StyleSheet} from 'react-native';
import {colors} from '../../utils';

const Loading = ({isLoading}) => {
  return (
    <Modal transparent={true} visible={isLoading} animationType={'none'}>
      <View style={styles.content}>
        <View style={styles.contentLoading}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    opacity: 0.8,
  },
  contentLoading: {
    backgroundColor: colors.white,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default Loading;
