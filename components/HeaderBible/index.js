import {View,TextInput,Button} from "react-native"

import SearchVerse from "../SearchVerse"
import ReadModal from "../ReadModal"
import StyleFontModal from "../StyleFontModal"

export default function HeaderBible(){

    return <View>
        <ReadModal />
        <SearchVerse />
        <StyleFontModal />
    </View>
}