import {View,Text} from "react-native";
import { styles } from "./styles";

import { BASE_URL } from "../configs";

import { useEffect, useState} from "react";

export default function Bible(){
    const [books,setBooks] = useState();

    useEffect(()=>{
        const request = new XMLHttpRequest();
        request.open("GET",BASE_URL + "get-books/ARA/")
        request.send();
        request.onload = ()=>{
            if (request.readyState === 4 && request.status === 200) {
                const data = request.response;
                console.log(JSON.parse(data))
                setBooks(JSON.parse(data));
              } else {
                console.log(`Error: ${request.status}`);
              }
        }


    })

    return (
        <View style={styles.container}>
            {books && books.map((book) => (
            <Text key={book.id}>{book.name}</Text>))}
        </View>
    );
};
