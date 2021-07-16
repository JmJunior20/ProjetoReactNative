import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

const End = ({ navigation }) => {
    return (
        <>
        <Header />
        <View style={styles.container}>
            <Text style={styles.texto}>PARABÉNS!</Text>
            <Text style={styles.texto}>Sua compra foi finalizada com sucesso!</Text>
        </View>
        </>
    );    
};

export default End;