import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { styles } from './styles';
import { useState } from 'react';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [num, setNum] = useState('');
 
  const [textoFinal, setTextoFinal] = useState('');

  function Calcular() {
    setTextoFinal(Math.floor(Math.random() * 11))
    

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Calculo IMC</Text>

      <Image
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={{
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 15
        }}
      />
      <Text style={styles.final}>Pense em um numero de 0 a 10</Text>
      
      

      <Button  color="green" title="Calcular" onPress={Calcular} />
      <Text style={styles.final}>{textoFinal}</Text>
    </SafeAreaView>
  );
}
