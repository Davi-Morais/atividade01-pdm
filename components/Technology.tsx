import { Pressable, View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Technology() {
    return (
        <View style={styles.technology}>
            <TouchableOpacity>
                <Text style={styles.nome}>Add</Text>
            </TouchableOpacity>

            <Text style={styles.nome}>
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
        height: 64,
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 8,
    },
    nome: {
        color: '#F2F2F2'
    }
})