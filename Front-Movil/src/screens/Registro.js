import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function Registro({navigation}){
    return(
        <View style={styles.ContainerRegistro}>
            <View style={styles.CuadritoRegistro}>
                <View style={styles.ContainerRegistro2}>
                    <Text style={styles.TextoRegistro}>Correo electrónico:</Text>
                    <TextInput style={styles.InputRegistro} placeholder="Correo electrónico"/>
                </View>
                <View style={styles.ContainerRegistro2}>
                    <Text style={styles.TextoRegistro}>Usuario:</Text>
                    <TextInput style={styles.InputRegistro} placeholder="Usuario"/>
                </View>
                <View style={styles.ContainerRegistro2}>
                    <Text style={styles.TextoRegistro}>Contraseña:</Text>
                    <TextInput style={styles.InputRegistro} placeholder="Contraseña"/>
                </View>
                <Button title="Entrar" onPress={() => navigation.navigate("Dashboard")} color="#CCD5AE"/>
            </View>
            <Text style={styles.MarcaAgua} >Acciones & Gestión S.A.S</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerRegistro: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CuadritoRegistro: {
        width: 300, 
        backgroundColor: '#E9EDC9',
        alignItems: 'center',
        justifyContent: 'space-around',    
        borderRadius: 20,
    },
    ContainerRegistro2:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    TextoRegistro: {
        fontSize: 23,
        fontFamily: 'Pacifico',
        color: '#463f3a',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    InputRegistro: {
        height: 40,
        borderColor: "#6b705c",
        color: '#CCD5AE',
        fontFamily: 'Pacifico',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 16,
    },  
    MarcaAgua: {
        color: '#CAC080',
        fontSize: 10,
        fontFamily: 'Pacifico',
        position: 'absolute',
        bottom: 10,
    }
})