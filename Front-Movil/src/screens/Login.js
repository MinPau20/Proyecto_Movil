import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput,  } from "react-native-gesture-handler";

export default function Login({navigation}){
    return(
        <View style={styles.ContainerLogin}>
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
    )
}

const styles = StyleSheet.create({
    ContainerLogin: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ContainerLogin2:{
        display: 'flex',
        flexDirection: 'row',
    },
    TextoLogin: {
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 16,
    },
    InputLogin: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 16,
    },    
});