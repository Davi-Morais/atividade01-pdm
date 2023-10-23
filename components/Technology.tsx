import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


type Technology = {
    id: number,
    isCompleted: boolean,
    nameNewTechnology: string,
}

interface Props {
    item: Technology,
    clear: (id:number) => void,
    update: (id:number) => void,
}


export default function Technology( { item, clear, update }:Props ) {
    return (
        <View style={styles.technology}>
            <TouchableOpacity style={styles.marcarConcluida} onPress={() => update(item.id)} >
                <View style={styles.circle}>
                    <Text style={styles.nome}>ok</Text>
                </View>
            </TouchableOpacity>

            {item.isCompleted === true 
            ?
            (
            <Text style={styles.concluida}>
                {item.nameNewTechnology }
            </Text>
            ) : (
            <Text style={styles.technologyName}>
                {item.nameNewTechnology }
            </Text>
            )
            }

            <TouchableOpacity
            onPress={() => clear(item.id)}>
                <Text style={styles.nome}>Clear</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    technology: {
        width: 362,
        minHeight: 64,
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 8,
    },
    concluida: {
        color: '#F2F2F2',
        textAlign: "center",
        maxWidth: 250,
        textDecorationLine: "line-through",
    },
    technologyName: {
        color: '#F2F2F2',
        textAlign: "center",
        maxWidth: 250,
    },
    nome: {
        color: '#F2F2F2',
        textAlign: "center",
    },
    marcarConcluida: {
        width: 24,
        height: 24,
        alignContent: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderColor: '#4EA8DE',
        borderWidth: 2,
        borderRadius: 24,
    }
})