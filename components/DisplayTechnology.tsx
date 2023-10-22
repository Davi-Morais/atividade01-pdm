import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native"
import Technology from "./Technology";


type Technology = {
    id: number,
    isCompleted: boolean,
    nameNewTechnology: string,
}

interface Props {
    arrayTechnologies: Technology[],
    functionRemoveTechnology: (id:number) => void
}


export default function DisplayTechnology({ arrayTechnologies, functionRemoveTechnology } : Props) {


    return (

        <View style={styles.listaTarefas}>

            {arrayTechnologies.length > 0 ? (
                <SafeAreaView style={styles.comTarefas}>
                    <FlatList
                        data={arrayTechnologies.slice().reverse()}
                        renderItem={({item}) => <Technology item={item} clear={functionRemoveTechnology} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
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