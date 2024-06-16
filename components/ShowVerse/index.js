import {View,Text} from "react-native"

export default function ShowVerse({verse,key}){  

    return <View key={key}>{verse && <Text><Text>{verse.verse}</Text>{verse.text}</Text>}</View>
}