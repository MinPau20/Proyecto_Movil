import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Analisis_Gts_Ing({navigation}){
    return(
        <View style={styles.ContainerAnalisis}>
            <Picker style={styles.picker}>
                <Picker.Item label="-- Seleccionar tipo --" value={null} />
                <Picker.Item label="Ingreso" value="ingreso" />
                <Picker.Item label="Gasto" value="gasto" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerAnalisis: {
        flex: 1,
        backgroundColor: '#FEFAE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    picker: {
        height: 50,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        color: "black",
      },
})