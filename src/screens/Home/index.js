import React, {useEffect, useState} from 'react';
import {FlatList, Alert, StyleSheet, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {colors} from '../../utils';
import {FloatingActionButton, ItemList} from '../../components';

const Home = ({navigation}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      firestore()
        .collection('buku')
        .orderBy('tahun', 'desc')
        .onSnapshot(documentSnapshot => {
          const tempArr = [];
          documentSnapshot.docs.map(doc => {
            tempArr.push({
              ...doc.data(),
              id: doc.id,
            });
          });
          setBooks(tempArr);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async item => {
    Alert.alert('Alert', `Apakah anda yakin ingin menghapus ${item.judul} ?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: async () => {
          try {
            await firestore().collection('buku').doc(item.id).delete();
          } catch (err) {
            console.log(err);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={books}
        renderItem={({item}) => (
          <ItemList
            item={item}
            onPress={() => navigation.navigate('EditBook', {item: item})}
            onLongPress={() => handleDelete(item)}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <FloatingActionButton onPress={() => navigation.navigate('AddBook')} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
