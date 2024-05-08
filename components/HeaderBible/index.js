import {View,TextInput,Button} from "react-native"

import SearchVerse from "../SearchVerse"

export default function HeaderBible(){

    return <View>
        <Button title="selectChapter"/>
        <SearchVerse />
        <Button title="styleFont"/>
    </View>
}