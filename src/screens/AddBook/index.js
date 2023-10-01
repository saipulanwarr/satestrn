import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {colors} from '../../utils';
import {Input, Button, Loading} from '../../components';

const AddBook = ({navigation}) => {
  const [kode, setKode] = useState('');
  const [judul, setJudul] = useState('');
  const [tahun, setTahun] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [pengarang, setPengarang] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      kode,
      judul,
      tahun,
      penerbit,
      pengarang,
    };

    try {
      setIsLoading(true);
      await firestore().collection('buku').add(payload);
      setIsLoading(false);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loading isLoading={isLoading} />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <Input
          label="Kode Buku"
          placeholder="Masukan Kode Buku"
          value={kode}
          onChangeText={text => setKode(text)}
        />
        <Input
          label="Judul Buku"
          placeholder="Masukan Judul Buku"
          value={judul}
          onChangeText={text => setJudul(text)}
        />
        <Input
          label="Tahun Terbit"
          placeholder="Masukan Tahun Terbit"
          value={tahun}
          onChangeText={text => setTahun(text)}
          numeric
        />
        <Input
          label="Nama Penerbit"
          placeholder="Masukan Nama Penerbit"
          value={penerbit}
          onChangeText={text => setPenerbit(text)}
        />
        <Input
          label="Nama Pengarang"
          placeholder="Masukan Nama Pengarang"
          value={pengarang}
          onChangeText={text => setPengarang(text)}
        />
      </ScrollView>
      <View style={styles.button}>
        <Button title="Simpan" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default AddBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    marginHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});
