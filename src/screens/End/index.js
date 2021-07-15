import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const End = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>PARABÉNS!</Text>
            <Text style={styles.texto}>Sua compra foi finalizada com sucesso!</Text>
        </View>
    );    
};

export default End;