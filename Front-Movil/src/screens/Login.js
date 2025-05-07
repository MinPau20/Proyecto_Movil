import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login({navigation}){
    return(
        <View style={styles.ContainerLogin}>
            <View style={styles.CuadritoLogin}>
                <View style={styles.ContainerLogin2}>
                    <Text style={styles.TextoLogin}>Ingresa correo electrónico: </Text>
                    <TextInput style={styles.InputLogin} placeholder="Correo electrónico" />
                </View>
                <View style={styles.ContainerLogin2}>
                    <Text style={styles.TextoLogin}>Ingresa contraseña: </Text>
                    <TextInput style={styles.InputLogin} placeholder="Contraseña" />
                </View>
                <Button title="Entrar" onPress={() => navigation.navigate("Dashboard")} color="#CCD5AE"/>
            </View>
            <Text style={styles.MarcaAgua} >Acciones & Gestión S.A.S</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerLogin: {
      flex: 1,
      backgroundColor: '#FEFAE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    CuadritoLogin: {
        width: 300, 
        backgroundColor: '#E9EDC9',
        alignItems: 'center',
        justifyContent: 'space-around',    
        borderRadius: 20,
    },
    ContainerLogin2:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    TextoLogin: {
        fontSize: 23,
        fontFamily: 'Pacifico',
        color: '#463f3a',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    InputLogin: {
        height: 40,
        borderColor: "#6b705c",
        color: '#CCD5AE',
        fontFamily: 'Pacifico',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 16,
    },    
    MarcaAgua:{
        color: '#CAC080',
        fontSize: 10,
        fontFamily: 'Pacifico',
        position: 'absolute',
        bottom: 10,
    }
});