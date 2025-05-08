import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function List_Gts_Ing({navigation}){
    return(
        <View style={styles.ContainerLista}>
            <Text style={styles.TituloLista}>Lista de Gastos e Ingresos</Text>
            <View>

            </View>
            <Text style={styles.MarcaAgua} >Acciones & Gestión S.A.S</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerLista: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      TituloLista:{
        fontSize: 42,
        fontFamily: 'Pacifico',
        color: '#463f3a',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    MarcaAgua:{
        color: '#CAC080',
        fontSize: 10,
        fontFamily: 'Pacifico',
        position: 'absolute',
        bottom: 10,
    }
});