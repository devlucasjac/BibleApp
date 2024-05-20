import {Button} from "react-native"

import { useContext } from "react"

import Theme from "../../context/Theme"

export default function DarkmodeButton(){
    const {theme,setTheme} = useContext(Theme)

    return <Button title={theme.isLit ? "☀️": "🌑"} 
    onPress={()=>setTheme({...theme,isLit:!theme.isLit})}/>
}