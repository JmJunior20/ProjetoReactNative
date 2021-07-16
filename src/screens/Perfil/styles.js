import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    texto: {
        fontSize: 35,
        marginBottom: 25,
        color: "#111",
        fontWeight:"bold",
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        width: "90%",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#111",
        borderRadius: 20,
    },
    login__button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#111',
        marginBottom: 15,
        borderRadius: 20,
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"white"
    },
    cadastro__button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'gray',
        marginBottom: 15,
        borderRadius: 20,
    },
    cadastro__buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"white"
    },
    sair__button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 20        
    },
    sair__buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"#111"
    },
    
});

export default styles;