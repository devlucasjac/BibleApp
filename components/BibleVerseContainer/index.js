import {useContext} from "react"
import {View,Text, Button} from "react-native"

import ShowVerse from "../ShowVerse"

import Books from "../../context/Books"
import CurrentBook from "../../context/CurrentBook"

export default function BibleVerseContainer ({verse, title, handleClick}){
    const {books} = useContext(Books)
    const {currentBook} = useContext(CurrentBook)

    function findBook(bookid) {
        if (books.allBooks.find((book) => book.bookid === bookid) === undefined) {
          return "livro não encontrado 😢";
        }
        return books.allBooks.find((book) => book.bookid === bookid);
    }

    return <>
        {verse.verse && 
            <>
                <View>
                    <Button  title="navegar" onPressed={() => {
                    handleClick !== undefined && handleClick(verse);
                    console.log(currentBook)
                }}/>
                    {title && <Text>{title}</Text>}
                    <Text>Livro:{findBook(verse.book).name}</Text>
                    <Text>Capitulo:{verse.chapter}</Text>
                    <ShowVerse verse={verse}/>
                </View>
            </>
        }
    </>
}