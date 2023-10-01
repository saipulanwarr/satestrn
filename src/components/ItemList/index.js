import React from 'react';
import {Text, Pressable, StyleSheet, Image, View} from 'react-native';
import {colors} from '../../utils';
import {Dummy} from '../../assets';

const ItemList = ({item, onPress, onLongPress}) => {
  return (
    <Pressable style={styles.item} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.content}>
        <Image source={Dummy} style={styles.image} />
        <View style={styles.contentText}>
          <Text style={styles.judul} numberOfLines={1}>
            {item.judul}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {item.kode}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {item.penerbit}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {item.pengarang}
          </Text>
        </View>
      </View>
      <Text style={styles.textTerbit}>
        tahun terbit: <Text style={styles.textTahun}>{item.tahun}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  content: {flexDirection: 'row'},
  judul: {color: colors.black, fontSize: 16, marginBottom: 8},
  text: {color: colors.gray},
  image: {width: 80, height: 90, borderRadius: 5},
  contentText: {flex: 1, marginLeft: 10},
  textTerbit: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
    color: colors.gray,
  },
  textTahun: {color: colors.black},
});

export default ItemList;
