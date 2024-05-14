import {Modal, Button, View, Text} from "react-native"

import {useState} from "react"

export default function ChapterSelector(){
    const [isVisible,setIsVisible] = useState(false)

    return <View>
        <Button title="Escolha o capitulo" onPress={()=>setIsVisible(!isVisible)}/>
        <Modal visible={isVisible} 
               onRequestClose={()=>setIsVisible(false)}
               animationType="slide"
        >
            <View style={{flex:1,backgroundColor:"ligthblue",padding:60}}>
                <Button title="Fecha" onPress={()=>setIsVisible(!isVisible)}/>
                <Text>Conteudo do modal</Text>
            </View> 
        </Modal>
    </View>
}