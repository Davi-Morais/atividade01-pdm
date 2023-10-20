import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Info from "./Info";
import InputTechnology from "./InputTechnology";
import DisplayTechnology from "./DisplayTechnology";

export default function List() {

    const [tarefas, setTarefas] = useState(0);
    const [concluidas, setConcluidas] = useState(0);

    return (
        <View style={styles.conteiner}>
            <InputTechnology />
            <View>
                <View style={styles.status}>
                    <Info name="Criadas" color="#4EA8DE" quantity={tarefas} />
                    <Info name="Concluidas" color="#8284FA" quantity={concluidas} />
                </View>

                <DisplayTechnology />
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