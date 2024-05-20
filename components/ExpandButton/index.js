import {View, Button, Text} from "react-native"

import DarkmodeButton from "../DarkmodeButton"

import { useState } from "react"

export default function ExpandButton (){
    const [expand,setExpand] = useState(false)

    return <View>
        <Button title={expand ? "-":"+"} onPress={()=>setExpand(!expand)}/>
        {expand && <View><DarkmodeButton /></View>}
    </View>

}