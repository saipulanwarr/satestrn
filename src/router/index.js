import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, AddBook, EditBook} from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBook}
        options={{title: 'Tambah'}}
      />
      <Stack.Screen
        name="EditBook"
        component={EditBook}
        options={{title: 'Ubah'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
