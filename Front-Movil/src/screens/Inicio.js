import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Inicio({navigation}){ 
    return(
        <View style={styles.ContainerInicio}>
            <Button title="Inicio de sesión" onPress={() => navigation.navigate("Login")} color="#CCD5AE" />
            <Button title="Registro" onPress={() => navigation.navigate("Registro")} color="#CCD5AE"/>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerInicio: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });
  