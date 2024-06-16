import {useEffect, useContext} from "react"

import Books from "../../context/Books";
import CurrentBook from "../../context/CurrentBook";

import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native";

import BibleVerseContainer from "../BibleVerseContainer";

export default function FoundedVerses(){
    const {books} = useContext(Books);
    const {currentBook,setCurrentBook} = useContext(CurrentBook);

    const navigation = useNavigation()
    //bug de permanencia do books.results ainda persiste
    useEffect(()=>{console.log(books.results)},[books])

    function ChangeChapter(verse){
        setCurrentBook({...currentBook,book:verse.book,chapter:verse.chapter})
        navigation.navigate("Bible");
    }

    return <ScrollView>
            {books.results.map((verse,id)=> <BibleVerseContainer verse={verse} key={id} handleClick={ChangeChapter(verse)}/>)}
        </ScrollView>
    
}