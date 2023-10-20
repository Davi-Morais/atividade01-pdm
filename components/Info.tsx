import { View, StyleSheet, Text } from "react-native";

type Props = {
    name: string,
    color: string,
    quantity: number
}

export default function Info({name, color, quantity}:Props) {
    return (
        <View style={styles.info}>
            <Text style={{color: color}}>{name}</Text>
            <View style={styles.background} >
                <Text style={styles.valores}>{quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        width: 25,
        height: 19,
        backgroundColor: '#333333',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999
    },
    valores: {
        color: 'aliceblue',
    }
})