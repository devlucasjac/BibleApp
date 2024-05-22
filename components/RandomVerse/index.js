import {View,Text} from "react-native"
import { useState,useEffect,useContext } from "react"

import { BASE_URL } from "../../configs"

import BibleVerseContainer from "../BibleVerseContainer"

export default function RandomVerse(){
    const [verse, setVerse] = useState();
    const { currentBook } = useContext(CurrentBook);

    useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", BASE_URL + "get-random-verse/" + currentBook.bible + "/");
        xhr.send();
        xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.response;            
            setVerse(JSON.parse(data));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
        };
  }, [currentBook.bible]);

    return <View>
        {verse && <BibleVerseContainer verse={verse} title={"Palavra do dia"}/>}
    </View>
}