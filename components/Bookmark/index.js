import {View, Button} from "react-native"
import { useContext, useState, useEffect } from "react"

import CurrentBook from "../../context/CurrentBook";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookmark(){
    const [save,setSave] = useState(false)
    const {currentBook} = useContext(CurrentBook)

    useEffect(()=>{LoadChapter()},[currentBook])

    const LoadChapter = async ()=>{
        try{
            const bible = await AsyncStorage.getItem("Bible")
            const book = await AsyncStorage.getItem("Book")
            const chapter = await AsyncStorage.getItem("Chapter") 
            if(bible == currentBook.bible && book == currentBook.book && chapter == currentBook.chapter){
                setSave(true)
            }else{
                setSave(false)
            }
            console.log("dados carregados")
        }catch(e){
            console.error('Failed to fetch the data from the storage', e);
        }
    }

    const SaveChaper = async () => {
        try{
            await AsyncStorage.setItem("Bible",currentBook.bible)
            await AsyncStorage.setItem("Book",currentBook.book.toString())
            await AsyncStorage.setItem("Chapter",currentBook.chapter.toString())
            setSave(true)
            console.log("dados salvos")
        }catch(e){
            console.error('Failed to save the data to the storage', e);
        }
    }

    return <View><Button title={save ? "salvo": "salvar"} onPress={SaveChaper}/></View>
}