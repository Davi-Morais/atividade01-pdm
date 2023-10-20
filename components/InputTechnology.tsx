import { TextInput, StyleSheet, View, Button, Pressable, Text } from "react-native";


export default function InputTechnology() {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Adiciona uma nova tecnologia"
                placeholderTextColor="#808080"
                style={styles.input}
            />

            <Pressable style={styles.button}>
                <Text>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        bottom: 26,
        flexDirection: "row",
        width: 362,
        height: 54,
        justifyContent: "space-around"
    },
    input: {
        backgroundColor: '#262626',
        color: '#808080',
        height: 54,
        width: 305,
        paddingHorizontal: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        backgroundColor: '#1E6F9F',
        marginLeft: 4,
        borderRadius: 6,
    }
})