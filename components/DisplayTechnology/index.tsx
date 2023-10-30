import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from "react-native"
import Technology from "../Technology";
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

type Technology = {
    id: number,
    isCompleted: boolean,
    nameNewTechnology: string,
}

interface Props {
    arrayTechnologies: Technology[],
    functionRemoveTechnology: (id:number) => void,
    functionChangeCompleted: (id:number) => void
}


export default function DisplayTechnology({ arrayTechnologies, functionRemoveTechnology, functionChangeCompleted } : Props) {
       
    const incompleteItems = arrayTechnologies.filter((item) => item.isCompleted === false);
    const completedItems = arrayTechnologies.filter((item) => item.isCompleted === true);

    const sortedArray = completedItems.concat(incompleteItems);  //vai haver um .reverse() na linha 34, por isso foi concatenado  assim
    

    return (

        <View style={styles.listaTarefas}>

            {arrayTechnologies.length > 0 ? (
                <SafeAreaView style={styles.comTarefas}>
                    <FlatList
                        data={sortedArray.slice().reverse()}
                        renderItem={({item}) => <Technology item={item} clear={functionRemoveTechnology} update={functionChangeCompleted} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
            ) : (
                <View style={styles.semTarefas}>

                    <View style={styles.image}>
                        <FontAwesome5 name="clipboard-list" size={80} color="aliceblue" />
                    </View>

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
        alignItems: "center"
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
    image: {
        marginBottom: 16
    }
})