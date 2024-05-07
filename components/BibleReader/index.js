import ShowVerse from "../ShowVerse"
import HeaderBible from "../HeaderBible"

import Books from "../../context/Books"
import CurrentBook from "../../context/CurrentBook"

import { BASE_URL } from "../../configs"

import {View, Text, ScrollView, Button} from "react-native"

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

    function changeChapter(val) {
      const valor = val;      
      if (valor === "proximo") {
        if (currentBook.chapter === book.chapters) {
          setCurrentBook({
            ...currentBook,
            book: currentBook.book + 1,
            chapter: 1,
          });
        } else {
          setCurrentBook({
            ...currentBook,
            chapter: currentBook.chapter + 1,
          });
        }
      } else {
        if (currentBook.chapter === 1) {
          setCurrentBook({
            ...currentBook,
            book: currentBook.book - 1,
            chapter: findBook(currentBook.book - 1).chapters,
          });
        } else {
          setCurrentBook({
            ...currentBook,
            chapter: currentBook.chapter - 1,
          });
        }
      }
    }

    function findBook(bookId) {
      let findedBook = books.allBooks.find((book) => book.bookid == bookId);
      /*if (findedBook === undefined) {
        setCurrentBook({ ...currentBook, book: 40 });
      }*/
      return findedBook;
    }
  
    const book = findBook(currentBook.book);

    

    return <ScrollView>
        {book && chapter &&(<>
          <HeaderBible />
          <Text>{book.name} : {currentBook.chapter}</Text>
          <>{chapter.map((verse)=><ShowVerse verse={verse} key={verse.id}/>)}</>
          <View>
            <Button title="Anterior" onPress={()=>changeChapter("anterior")}/>
            <Button title="Proximo" onPress={()=>changeChapter("proximo")}/>
          </View>
        </>)}   
      </ScrollView>
}