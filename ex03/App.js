import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { styles } from './styles';
// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)

  function Calcular() 
  {
   setResult(num1 * num2)
    
  }
    


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Multiplicador de números</Text>
      <Card>
        <TextInput style={styles.texto}
          placeholder="Digite o 1° número "
          onChangeText={setNum1}
        />

        <TextInput style={styles.texto}

          placeholder="Digite o 2° número"
         
          onChangeText={setNum2}
        />

        <Button color="green" title="Calcular" onPress={Calcular}/>

        <Text style={styles.container}>{result}</Text>
      </Card>
    </SafeAreaView>
  );
}

