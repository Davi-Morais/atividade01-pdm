import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Info from "./Info";
import InputTechnology from "./InputTechnology";
import DisplayTechnology from "./DisplayTechnology";


type Technology = {
    isCompleted: boolean,
    nameNewTechnology: string,
}


export default function List() {


    const [arrayTechnologies, setArrayTechnology] = useState<Technology[]>([]);

    
    return (
        <View style={styles.conteiner}>
            <InputTechnology arrayTechnologies={arrayTechnologies} function_Update_ArrayTechnologies={setArrayTechnology} />

            <View>
                <View style={styles.status}>
                    <Info name="Criadas" color="#4EA8DE" quantity={arrayTechnologies.length} />
                    <Info name="Concluidas" color="#8284FA" quantity={arrayTechnologies.length} />
                </View>

                <DisplayTechnology arrayTechnologies={arrayTechnologies} />
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#1A1A1A',
        width: '100%',
        height: 600,
        paddingHorizontal: 24
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})

