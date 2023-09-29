import { Text, SafeAreaView, StyleSheet, View, Button, Pressable } from 'react-native';
import { useState } from 'react'
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import {decoration} from './styles' 
// or any files within the Snack
export default function App() {

  const [contador, setContador] = useState(0)


  function somar()
   {
      setContador(contador+1)

   }

  function subtrair()
  {
    if(contador == 0)
    {
     setContador(0)
    } 
    else 
    {
      setContador(contador-1)
    }
  }

  return (
    <SafeAreaView style={decoration.container}>
      <Text style={decoration.paragraph}>Contador de pessoas</Text>
      <Card>
        <Text style={decoration.paragraph}>{contador}</Text>
        <Button color="green" title="+" onPress={somar}/>
        <Button color="red" title="-" onPress={subtrair}/>
      </Card>
    </SafeAreaView>
  );
}