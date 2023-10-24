import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Info from "../Info";
import InputTechnology from "../InputTechnology";
import DisplayTechnology from "../DisplayTechnology";


type Technology = {
    id: number,
    isCompleted: boolean,
    nameNewTechnology: string,
}


export default function List() {


    const [arrayTechnologies, setArrayTechnology] = useState<Technology[]>([]);
    const [concluidas, setConcluidas] = useState(0);


    function removerTechnology(id:number) {
        const newArray = arrayTechnologies.filter((e) => e.id !== id);
        setArrayTechnology(newArray);

        getConcluidas(newArray); //atualiza a quantidade de tarefas concluidas
    }

    function changeStateCompleted(id:number) {
        const newArray = arrayTechnologies.map((e) => {
            if(e.id == id) {
                e.isCompleted = !e.isCompleted
                return e;
            }
            return e;
        })
        setArrayTechnology(newArray);
        
        getConcluidas(newArray); //atualiza a quantidade de tarefas concluidas
    }


    function getConcluidas(newArray:Technology[]) {
        const atividadesConcluidas = newArray.filter((e) => {
            if (e.isCompleted === true) {
                return e;
            }
        })
        setConcluidas(atividadesConcluidas.length)
    }


    return (
        <View style={styles.conteiner}>
            <InputTechnology arrayTechnologies={arrayTechnologies} function_Update_ArrayTechnologies={setArrayTechnology}  />

            <View>
                <View style={styles.status}>
                    <Info name="Criadas" color="#4EA8DE" quantity={arrayTechnologies.length} />
                    <Info name="Concluidas" color="#8284FA" quantity={concluidas} />
                </View>

                <DisplayTechnology arrayTechnologies={arrayTechnologies} functionRemoveTechnology={removerTechnology} functionChangeCompleted={changeStateCompleted} />
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#1A1A1A',
        width: '100%',
        height: 600,
        paddingHorizontal: 24
    },
    status: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})

