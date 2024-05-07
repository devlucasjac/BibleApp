import {useContext} from "react"
import {View,Text} from "react-native"

import ShowVerse from "../ShowVerse"

import Books from "../../context/Books"

export default function BibleVerseContainer ({verse, title, handleClick}){
    const {books} = useContext(Books)

    function findBook(bookid) {
        if (books.allBooks.find((book) => book.bookid === bookid) === undefined) {
          return "livro não encontrado 😢";
        }
        return books.allBooks.find((book) => book.bookid === bookid);
      }

    return <>
        {verse.verse && 
            <>
                <View onPressed={() => {
                    handleClick !== undefined && handleClick(verse);
                }}>
                    {title && <Text>{title}</Text>}
                    <Text>Livro:{findBook(verse.book).name}</Text>
                    <Text>Capitulo:{verse.chapter}</Text>
                    <ShowVerse verse={verse}/>
                </View>
            </>
        }
    </>
}