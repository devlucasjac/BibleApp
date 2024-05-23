import {View, ScrollView,Button, Modal, Text} from "react-native"
import {useState, useContext, useEffect} from "react"

import Theme from "../../context/Theme"

export default function StyleFontModal(){
    const [isVisible,setIsVisible] = useState(false)
    const {theme,setTheme} = useContext(Theme)

    useEffect(()=>{
        console.log(theme)
    },[theme])

    return <ScrollView>
            <Button title="StyleFont" onPress={()=>setIsVisible(!isVisible)}/>
            <Modal visible={isVisible} 
               onRequestClose={()=>setIsVisible(false)}
               animationType="slide">
                <View>
                    <Text>Size:</Text>
                    <Button title="small" onPress={()=> setTheme({...theme,size:"small"})}/>
                    <Button title="normal" onPress={()=> setTheme({...theme,size:"normal"})}/>
                    <Button title="big" onPress={()=> setTheme({...theme,size:"big"})}/>
                    <Text>Bold:</Text>
                    <Button title="thin" onPress={()=> setTheme({...theme,bold:"thin"})}/>
                    <Button title="normal" onPress={()=> setTheme({...theme,bold:"normal"})}/>
                    <Button title="large" onPress={()=> setTheme({...theme,bold:"large"})}/>
                </View>
               </Modal>
        </ScrollView>
}

