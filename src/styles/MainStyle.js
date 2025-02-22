import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderColor: 'red',
        borderWidth: 10,
        backgroundColor: 'tomato',
        color: 'white'
    },
    imagemy:{
        height: 200,
        width: 300,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,    
        shadowColor: "#000",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        marginTop: 20
    },
    logoStyle:{
        height: 60,
        width:  50,
        objectFit: 'contain',
    },
    TextInput: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 6,
        width: '80%',
        marginTop: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        fontSize: 16,
        color: 'black'
    },
    textStyle:{
        color: 'white',
        fontFamily: 'roboto',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 24
    }
})
