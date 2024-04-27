import {View,Text,Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ScreenNavigator(){
    const navigation = useNavigation();

    return <View><Button title="Home" onPress={()=> navigation.navigate("Home")}/><Button title="Bible" onPress={()=>navigation.navigate("Bible")}/></View>
}