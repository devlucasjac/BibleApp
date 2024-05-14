import {View, TextInput, Button} from "react-native"

import {useState, useContext} from "react"
import { useNavigation } from "@react-navigation/native";

import CurrentBook from "../../context/CurrentBook"
import Books from "../../context/Books"

import { BASE_URL } from "../../configs";

export default function SearchVerse(){
    const {currentBook} = useContext(CurrentBook)
    const {books,setBooks} = useContext(Books)

    const navigation = useNavigation() 

    const [input,setInput] = useState()

    const handleInput =(text)=>{
        setInput(text)
        const xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          BASE_URL + "find/" + currentBook.bible + "/?search=" + text
        );
        xhr.send();
        xhr.onload = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.response;    
            console.log(JSON.parse(data))        
            setBooks({...books, results: JSON.parse(data)});
          } else {
            console.log(`Error: ${xhr.status}`);
          }
        };
    }

    function searchPassages() {    
        navigation.navigate("BibleSearch");    
        //setBooks({...books, results: []}); 
        /*CASO DE ALGUM BUG DE PERMANENCIA NA PESQUISA, OPTE POR "LIMPAR" O STATE*/               
    }    

    return <View>
        <TextInput placeholder="pesquisa..." value={input} onChangeText={handleInput}/>
        <Button title="pesquisar" onPress={searchPassages}/>
    </View>
}