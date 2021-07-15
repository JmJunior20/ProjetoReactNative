import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const Login = ({ navigation }) => {
    
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={styles.container}>           

            <Text style={styles.texto}>LOGIN</Text>
            <TextInput 
                style={styles.login__input}
                value={nome}
                onChangeText={setNome} 
                placeholder='Digite seu usuário' 
            />
            <TextInput 
                style={styles.login__input} 
                value={senha}
                onChangeText={setSenha} 
                placeholder='Digite sua senha' 
                secureTextEntry={true} 
            />
            <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => login(nome, senha, {navigation})}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.cadastro__button} 
            onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.cadastro__buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.sair__button} 
            onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.sair__buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    );    
};

function login(nome, senha, {navigation}) {
    const User = 'Junior';
    const Pass = '12345';
    if (nome != User || senha != Pass) {
        alert('Usuário ínvalido ou senha inválido!')
    } else {
        navigation.jumpTo('Home');
    }
};

export default Login;