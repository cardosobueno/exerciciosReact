import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import {styles} from './styles'


function App(){


  const [contador, setContador] = useState(0)


  function mudarContador(incrementar){
    if (incrementar){
      setContador(contador+1)
    }
    else if (contador > 0){
      setContador(contador-1)
    }
  }


  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>


      <Text style={styles.contador}>{contador}</Text>


      <Button title="+" color="green" onPress={() => mudarContador(true)}/>


      <Button title="-" color="red" onPress={() => mudarContador(false)}/>
    </View>
  )
}


export default App
