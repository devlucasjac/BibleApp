import { View, ScrollView, Text, Button } from "react-native"

import { useState, useEffect, useContext } from "react"

import {BASE_URL,Flags} from "../../configs"

import CurrentBook from "../../context/CurrentBook"

export default function BibleSelector(){
    const [bibles, setBibles] = useState()
    const {currentBook, setCurrentBook} = useContext(CurrentBook)

    useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET", BASE_URL + "static/bolls/app/views/languages.json");
        xhr.send();
        xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.response;
            console.log(JSON.parse(data)[0]);
            setBibles(JSON.parse(data));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
        };
    },[])

    return <ScrollView>
            {bibles && bibles.map((bible,i)=><View>
                <Text>{bible.language}{Flags[i]}</Text>
                {bible.translations.map((translation)=>
                    <Button title={translation.full_name} 
                            onPress={()=> setCurrentBook({...currentBook,
                                bible:translation.short_name,
                                book:1,
                                chapter:1
                            })}/>
                )}                
            </View>)}
        </ScrollView>
}