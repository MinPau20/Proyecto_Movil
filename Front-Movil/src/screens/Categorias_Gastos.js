import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, TextInput } from "react-native";

export default function Categorias_Gastos({navigation}){
    const [mostrarCuadro, setMostrarCuadro] = useState(false);

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
                    <TouchableOpacity onPress={() => setMostrarCuadro(true)}>
                        <View style={styles.Card}></View>
                        <Text style={styles.TextCard}>Agregar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {mostrarCuadro && (
                    <View style={styles.CuadroCategoria}>
                        <Text style={{ color: 'black' }}>Nombre de la categoría:</Text>
                        <TextInput style={styles.InputCategorias} placeholder="Categoría" />
                        <TouchableOpacity onPress={() => setMostrarCuadro(false)}>
                        <Text style={{ color: 'blue' }}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                    )}
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
    },
    CuadroCategoria: {
        position: 'absolute',
        width: 200,
        height: 100, 
        top: 150,
        left: 80,
        right: 70,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        zIndex: 100,
    },
    InputCategorias: {
        height: 40,
        borderColor: "#6b705c",
        color: '#CCD5AE',
        fontFamily: 'Pacifico',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 16,
    },
})