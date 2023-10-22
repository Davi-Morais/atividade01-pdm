import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import Technology from "./Technology";


type Technology = {
    id: number,
    isCompleted: boolean,
    nameNewTechnology: string,
}


interface Props {
    arrayTechnologies: Technology[],
    function_Update_ArrayTechnologies: ( technologies: Technology[] ) => void
}


export default function InputTechnology( { arrayTechnologies, function_Update_ArrayTechnologies } : Props ) {

    const [ userInputText, setUserInputText ] = useState('');
    const [id, setID] = useState(1);
    

    function addNewItemArray() {
        if (userInputText === '') return;

        const objectNew:Technology = { id: id, isCompleted: false, nameNewTechnology: userInputText};
        setID(id + 1);

        function_Update_ArrayTechnologies([...arrayTechnologies, objectNew]);
    }


    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Adiciona uma nova tecnologia"
                placeholderTextColor="#808080"
                style={styles.input}
                onChangeText={(e) => setUserInputText(e)}
            />

            <TouchableOpacity 
            activeOpacity={0.5} 
            style={styles.button} 
            onPress={addNewItemArray}
            >
                <Text>+</Text>
            </TouchableOpacity>
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