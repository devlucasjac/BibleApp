import {View,TextInput,Button} from "react-native"

import SearchVerse from "../SearchVerse"
import ReadModal from "../ReadModal"

export default function HeaderBible(){

    return <View>
        <ReadModal />
        <SearchVerse />
        <Button title="styleFont"/>
    </View>
}