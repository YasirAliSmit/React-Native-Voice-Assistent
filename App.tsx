import {  Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import AppNavigation from './src/navigation'
import { apiColl } from './src/api/OpenAi'
const App = () => {
    useEffect(()=>{
        apiColl('what is quantum computing')
    },[])
return(<AppNavigation/>)
}
export default App
