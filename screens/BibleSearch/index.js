import {View,Text} from "react-native";
import { styles } from "./style";

import { useContext, useEffect } from "react";

import Books from "../../context/Books";

import ShowVerse from "../../components/ShowVerse";

export default function BibleSearch(){
    const {books} = useContext(Books)

    useEffect(()=>{console.log(books.results)},[books])

    return (
        <View style={styles.container}>
            {books.results != [] ? 
                books.results.map((verse)=> <ShowVerse verse={verse}/>) :
                <Text>não</Text>
            } 
        </View>
    )
}