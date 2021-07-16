import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

const Perfil = ({ navigation }) => {

    return (
        <>
        <Header />
        <View style={styles.container}>
            <Text style={styles.texto}>Olá, José</Text>           
            <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.login__buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
        </>
    );    
};

export default Perfil;