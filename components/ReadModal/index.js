import {Modal, Button, View, ScrollView} from "react-native"

import {useState} from "react"

import BookSelector from "../BookSelector"
import BibleSelector from "../BibleSelector"
import ChapterSelector from "../ChapterSelector"

export default function ReadModal(){
    const [isVisible,setIsVisible] = useState(false) 

    return <ScrollView>
        <Button title="Escolha o capitulo" onPress={()=>setIsVisible(!isVisible)}/>
        <Modal visible={isVisible} 
               onRequestClose={()=>setIsVisible(false)}
               animationType="slide"
        >
            <View style={{flex:1,backgroundColor:"ligthblue",padding:60}}>
                <Button title="Fecha" onPress={()=> setIsVisible(!isVisible)}/>
                <BibleSelector />                
                <BookSelector />
                <ChapterSelector />
            </View> 
        </Modal>
    </ScrollView>
}