import {View, Button, Text} from "react-native"

import { useState } from "react"

export default function ExpandButton (){
    const [expand,setExpand] = useState(false)

    return <View>
        <Button title={expand ? "-":"+"} onPress={()=>setExpand(!expand)}/>
        {expand && <View><Text>Abriu</Text></View>}
    </View>

}