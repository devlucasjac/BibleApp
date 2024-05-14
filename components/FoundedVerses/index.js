import {useEffect, useContext} from "react"

import Books from "../../context/Books";

import { ScrollView } from "react-native"

import BibleVerseContainer from "../BibleVerseContainer";

export default function FoundedVerses(){
    const {books} = useContext(Books);

    useEffect(()=>{console.log(books.results)},[books])

    return <ScrollView>
            {books.results.map((verse)=> <BibleVerseContainer verse={verse}/>)}
        </ScrollView>
    
}