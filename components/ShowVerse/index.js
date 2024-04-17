import {View,Text} from "react-native"

export default function ShowVerse({verse}){  

    return <View>{verse && <Text><Text>{verse.verse}</Text>{verse.text}</Text>}</View>
}