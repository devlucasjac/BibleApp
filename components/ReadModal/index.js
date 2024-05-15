import {Modal, Button, View, Text} from "react-native"

import {useState} from "react"

import BibleSelector from "../BibleSelector"

export default function ReadModal(){
    const [isVisible,setIsVisible] = useState(false)
    const [showBible,setShowBible] = useState(false)

    return <View>
        <Button title="Escolha o capitulo" onPress={()=>setIsVisible(!isVisible)}/>
        <Modal visible={isVisible} 
               onRequestClose={()=>setIsVisible(false)}
               animationType="slide"
        >
            <View style={{flex:1,backgroundColor:"ligthblue",padding:60}}>
                <Button title="Fecha" onPress={()=> setIsVisible(!isVisible)}/>
                <Button title="Biblia" onPress={()=> setShowBible(!showBible)}/>
                {showBible && <BibleSelector />}
            </View> 
        </Modal>
    </View>
}