import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar } from "react-native";

export default function Categorias_Gastos({navigation}){
    return(
        <View style={styles.ContainerCategorias}>
            <View style={styles.ContainerCategorias2}>
                <View style={styles.ContainerCard}>
                    <View style={styles.Card}></View>
                    <Text style={styles.TextCard}>Casa</Text>
                </View>
                <View style={styles.ContainerCard}>
                    <View style={styles.Card}></View>
                    <Text style={styles.TextCard}>Ocio</Text>
                </View>
                <View style={styles.ContainerCard}>
                    <View style={styles.Card}></View>
                    <Text style={styles.TextCard}>Educación</Text>
                </View>
                <View style={styles.ContainerCard}>
                    <View style={styles.Card}></View>
                    <Text style={styles.TextCard}>Transporte</Text>
                </View>
                <View style={styles.ContainerCard}>
                    <View style={styles.Card}></View>
                    <Text style={styles.TextCard}>Alimentos</Text>
                </View>
                <View style={styles.ContainerCard}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <View style={styles.Card}></View>
                        <Text style={styles.TextCard}>Agregar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    ContainerCategorias:{
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    ContainerCategorias2: {
        display: 'flex',
        width: 320,
        height: 550,
        backgroundColor: 'gray',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 20
    },
    ContainerCard:{
        width: 80,
        height: 120,
        display: 'flex',
        paddingTop: StatusBar.currentHeight || 30,
        backgroundColor: 'gray',
        alignItems: 'center',
        borderRadius: 20
    },
    Card: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      padding: 10,
      borderRadius: 30,
      backgroundColor: 'white',
    },
    TextCard: {
        textShadowColor: 'black'
    }
})