import Books from "../../context/Books";
import CurrentBook from "../../context/CurrentBook";

import {View,Text} from "react-native";
import { styles } from "./styles";

import { BASE_URL } from "../configs";

import { useEffect, useContext } from "react";

export default function Bible(){
    const {books,setBooks} = useContext(Books);
    const {currentBook} = useContext(CurrentBook);

    useEffect(()=>{
        const request = new XMLHttpRequest();
        request.open("GET",BASE_URL + "get-books/"+currentBook.bible + "/")
        request.send();
        request.onload = ()=>{
            if (request.readyState === 4 && request.status === 200) {
                const data = request.response;
                console.log(JSON.parse(data))
                setBooks({...books,allBooks:JSON.parse(data)});
              } else {
                console.log(`Error: ${request.status}`);
              }
        }
    })

    return (
        
        <View style={styles.container}>
            <Text>OLa</Text>
            {books.allBooks && books.allBooks.map((book) => (
            <View style={styles.smallCont}><Text key={book.id}>{book.name}</Text></View>))}
        </View>
    );
};
