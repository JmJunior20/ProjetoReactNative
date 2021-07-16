import React from 'react';
import { Text, View } from 'react-native';
import Book from 'react-native-vector-icons/Ionicons';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <Book name="book" color={"#fff"} size={25} />
      <Text style={styles.headerText}>SERRABOOK</Text>
    </View>
  );
}
 
export default Header;