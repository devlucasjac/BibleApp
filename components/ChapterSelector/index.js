import { ScrollView, Button } from "react-native";

import CurrentBook from "../../context/CurrentBook";
import Books from "../../context/Books";

import { useContext, useState, useEffect } from "react";

export default function ChapterSelector(){
    const [chapters,setChapters] = useState()
    const [showChapters,setShowChapters] = useState()
    const {currentBook,setCurrentBook} = useContext(CurrentBook)
    const {books} = useContext(Books)

    useEffect(() => {
        const book = books.allBooks.find((book) => book.bookid == currentBook.book);
        let rows = [];
        for (let i = 1; i <= book.chapters; i++) {
          rows.push(i);
        }
        setChapters(rows);
      }, [currentBook.book]);

    return <ScrollView>
        <Button title="Capitulo" onPress={()=> setShowChapters(!showChapters)}/>
        {showChapters && chapters && chapters.map((chapter,id)=>
            <Button title={chapter.toString()} key={id} onPress={()=>{
                setShowChapters(!showChapters)
                setCurrentBook({...currentBook,chapter:chapter})
            }}/>
        )}
    </ScrollView>
}