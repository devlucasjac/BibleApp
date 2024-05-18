import {View, ScrollView, Button} from "react-native"

import { useState,useEffect,useContext } from "react"


import {BASE_URL} from "../../configs"

import CurrentBook from "../../context/CurrentBook"

export default function BookSelector() {
    const [books,setBooks] = useState()
    const [showBook,setShowBook] = useState(false)
    const {currentBook,setCurrentBook} = useContext(CurrentBook)

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", BASE_URL + "get-books/" + currentBook.bible + "/");
        xhr.send();
        xhr.onload = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.response;
            setBooks(JSON.parse(data));
          } else {
            console.log(`Error: ${xhr.status}`);
          }
        };
      });

    return <ScrollView>
        <Button title="Livro" onPress={()=> setShowBook(!showBook)}/>
        {showBook && books && books.map((book)=><View>
            <Button title={book.name} onPress={()=>{setShowBook(!showBook)
              setCurrentBook({...currentBook,book:book.bookid,chapter:1})}}/>
        </View>)}
    </ScrollView>
} 