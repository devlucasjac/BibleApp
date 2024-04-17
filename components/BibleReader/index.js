import ShowVerse from "../ShowVerse"

import Books from "../../context/Books"
import CurrentBook from "../../context/CurrentBook"

import { BASE_URL } from "../../configs"

import {View,Text,ScrollView} from "react-native"

import { useEffect,useContext, useState} from "react"

export default function BibleReader (){
    const {currentBook,setCurrentBook} = useContext(CurrentBook)
    const {books} = useContext(Books)

    const [chapter,setChapter] = useState()

    useEffect(()=>{
        const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      BASE_URL +
        "get-text/" +
        currentBook.bible +
        "/" +
        currentBook.book +
        "/" +
        currentBook.chapter+
        "/"
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = xhr.response;
        setChapter(JSON.parse(data));
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    },[currentBook])
    

    return <ScrollView>{chapter && chapter.map((verse)=><ShowVerse verse={verse} key={verse.id}/>)}</ScrollView>
}