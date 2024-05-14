import {View,TextInput,Button} from "react-native"

import SearchVerse from "../SearchVerse"
import ChapterSelector from "../ChapterSelector"

export default function HeaderBible(){

    return <View>
        <ChapterSelector />
        <SearchVerse />
        <Button title="styleFont"/>
    </View>
}