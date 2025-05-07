import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

export default function Registro({navigation}){
    return(
        <View style={styles.ContainerRegistro}>
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
    )
}

const styles = StyleSheet.create({
    ContainerRegistro: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ContainerRegistro2:{
          display: 'flex',
          flexDirection: 'row',
      },
      TextoRegistro: {
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 16,
      },
      InputRegistro: {
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 16,
      },  
})