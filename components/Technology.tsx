import { Pressable, View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Technology() {
    return (
        <View style={styles.technology}>
            <TouchableOpacity style={styles.marcarConcluida}>
                <View style={styles.circle}>
                    <Text style={styles.nome}>ok</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.technologyName}>
                Alguma tecnologia
            </Text>

            <TouchableOpacity>
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
        justifyContent: 'space-around',
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 8,
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