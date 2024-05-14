import {View} from "react-native";
import { styles } from "./style";

import { useContext, useEffect} from "react";

import Books from "../../context/Books";

import FoundedVerses from "../../components/FoundedVerses/index";

export default function BibleSearch(){
    const {books} = useContext(Books)    

    useEffect(()=>{
        console.log("entrou na pagina de busca")    
    },[])

    return (
        <View style={styles.container}>
            {books.results &&   <FoundedVerses />} 
        </View>
    )
}