import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-web";
import Login from "./Login";
import Registro from "./Registro";

export default function Inicio({navigation}){
    return(
        <View style={styles.ContainerInicio}>
            <Button title="Inicio de sesión" onPress={Login}/>
            <Button title="Registro" onPress={Registro}/>
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
  