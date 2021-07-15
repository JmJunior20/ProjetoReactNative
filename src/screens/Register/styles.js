import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    texto: {
        fontSize: 30,
        marginBottom: 20,
        color: "#111",
        fontWeight:"bold",
    },
    input:{
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
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#111',
        marginBottom: 15,
        borderRadius: 20,
    },
    buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"white"
    },
    voltar__buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"#111"
    },
    
});

export default styles;