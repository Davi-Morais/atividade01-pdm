import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Info from "./Info";

export default function List() {

    const [tarefas, setTarefas] = useState(0);
    const [concluidas, setConcluidas] = useState(0);

    return (
        <View style={styles.conteiner}>
            <View style={styles.status}>
                <Info name="Criadas" color="#4EA8DE" quantity={tarefas} />
                <Info name="Concluidas" color="#8284FA" quantity={tarefas} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#1A1A1A',
        width: 410,
        height: 600,
        padding: 24
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 55
    }
})