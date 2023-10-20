import { View, Text, StyleSheet, ScrollView } from "react-native"
import Technology from "./Technology";

export default function DisplayTechnology() {
    return (

        <View style={styles.listaTarefas}>

            {true ? (
                <ScrollView contentContainerStyle={styles.comTarefas}>
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                    <Technology />
                </ScrollView>
            ) : (
                <View style={styles.semTarefas}>
                    <Text style={styles.texto}>
                        Você ainda não tem tecnologias cadastradas
                    </Text>
                    <Text style={styles.texto}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    listaTarefas: {
        borderTopWidth: 1,
        borderTopColor: '#333333',
        width: 362,
        height: 'auto',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 110,
    },
    semTarefas: {
        marginTop: 20,
        paddingVertical: 48,
    },
    comTarefas: {
        flexDirection: 'column',
    },
    texto: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: '#808080'
    },
})