import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Dashboard(){
    return(
        <View style={styles.ContainerDasboard}> 
            <Text style={styles.TextoDashboard} >Bienvenid@, Esperamos que tenga una buena experiecia</Text>
            <View style={styles.DashboardIcon}>
                <View style={styles.CuadritoDash}>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Analisis-icon1.png')} ></Image>
                        <Text style={styles.TextoDashboard} >Análisis de Gastos e Ingresos</Text>
                    </View>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Analisis-icon1.png')} ></Image>
                        <Text style={styles.TextoDashboard} >Análisis de Gastos e Ingresos</Text>
                    </View>
                </View>
                <View style={styles.CuadritoDash}>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Analisis-icon1.png')} ></Image>
                        <Text style={styles.TextoDashboard} >Análisis de Gastos e Ingresos</Text>
                    </View>
                    <View style={styles.IconosDash}>
                        <Image source={require('../Icons/Analisis-icon1.png')} ></Image>
                        <Text style={styles.TextoDashboard} >Análisis de Gastos e Ingresos</Text>
                    </View>
                </View>
            </View>
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
    DashboardIcon:{
        width: 380 ,
        backgroundColor: '#E9EDC9',
        alignItems: 'center',
        justifyContent: 'space-around',    
        borderRadius: 20,
    },    
    CuadritoDash: {
        display: 'flex',
        flexDirection: 'row',
    },
    IconosDash: {
        margin: '2%',
        width: 200,
    },
    TextoDashboard:{
        fontSize: 20,
        fontFamily: 'Pacifico',
        color: '#463f3a',
    },
  });
  