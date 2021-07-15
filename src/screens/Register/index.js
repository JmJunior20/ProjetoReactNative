import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

const Register = ({ navigation }) => {
    
    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={styles.container}>           

            <Text style={styles.texto}>CADASTRO</Text>
            <TextInput 
                style={styles.input}
                value={cpf}
                onChangeText={setCpf} 
                placeholder='Digite seu CPF' 
            />
            <TextInput 
                style={styles.input} 
                value={nome}
                onChangeText={setNome} 
                placeholder='Nome completo' 
            />
            <TextInput 
                style={styles.input} 
                value={email}
                onChangeText={setEmail} 
                placeholder='ex.: email@email.com'
                keyboardType={'email-address'}
            />
            <TextInput 
                style={styles.input} 
                value={tel}
                onChangeText={setTel} 
                placeholder='Celular (ddd + telefone)'
                keyboardType={'phone-pad'}
            />
            <TextInput 
                style={styles.input} 
                value={nascimento}
                onChangeText={setNascimento} 
                placeholder='DDMMAAAA' 
                keyboardType={'numeric'}
            />
            <TextInput 
                style={styles.input} 
                value={senha}
                onChangeText={setSenha} 
                placeholder='Digite sua senha' 
                secureTextEntry={true} 
                keyboardType={'numeric'}
            />
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => login(nome, senha, {navigation})}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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
        navigation.jumpTo('Perfil');
    }
};

export default Register;