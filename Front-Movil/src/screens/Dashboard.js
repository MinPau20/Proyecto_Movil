import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Dashboard(){
    return(
        <View style={styles.ContainerDasboard}> 
            <Text style={styles.TextoDashboard} >Bienvenid@, Esperamos que tenga una buena experiecia</Text>
            <View style={styles.DashboardIcon}>
                <View style={styles.CuadritoDash}>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Categoria-icon.png')} ></Image>
                        <Text style={styles.TextoiconDashboard} >Categorias de Gastos</Text>
                    </View>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Registro-icon.png')} ></Image>
                        <Text style={styles.TextoiconDashboard} >Registros de Ingresos y Egresos</Text>
                    </View>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Lista-icon.png')} ></Image>
                        <Text style={styles.TextoiconDashboard} >Lista de Gastos e Ingresos</Text>
                    </View>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Analisis-icon.png')} ></Image>
                        <Text style={styles.TextoiconDashboard} >Análisis de Gastos e Ingresos</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.MarcaAgua} >Acciones & Gestión S.A.S</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerDasboard: {
      flex: 1,
      backgroundColor: '#FEFAE0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextoDashboard:{
        fontSize: 30,
        fontFamily: 'Pacifico',
        color: '#463f3a',
    },
    DashboardIcon:{
        margin: 20,
    },    
    CuadritoDash: {
        display: 'flex',
        flexDirection: 'row',
    },
    IconosDash: {
        margin: 5,
        width: 100,
        backgroundColor: '#E9EDC9',
        alignItems: 'center',
        justifyContent: 'space-around',    
        borderRadius: 20,
    },
    TextoiconDashboard:{
        fontSize: 10,
        fontFamily: 'Pacifico',
        marginTop: 5,
        color: '#463f3a',
    },
    MarcaAgua:{
        color: '#CAC080',
        fontSize: 10,
        fontFamily: 'Pacifico',
        position: 'absolute',
        bottom: 10,
    }

  });
  