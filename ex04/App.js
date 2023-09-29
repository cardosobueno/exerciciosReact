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
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [textoFinal, setTextoFinal] = useState('');

  function Calcular() {
    resultado = (alcool / gasolina)
    if (resultado < 0.7)
    {
      setTextoFinal("ABASTEÇA COM ÁLCOOL")
    }else
    {
       setTextoFinal("VRUUUMMM ABASTEÇA COM GASOLINA ")
    }
    
  
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Alcool ou Gasolina?</Text>

      <Image
        source={{
          uri: 'https://paineira.usp.br/bios/wp-content/uploads/2010/07/etanol-gasolina.png?w=300',
        }}
        style={{
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      />
      <TextInput style={styles.texto} placeholder="Preço do Alcool " onChangeText={setAlcool} />
      <TextInput style={styles.texto} placeholder="Preço da Gasolina" onChangeText={setGasolina} />

      <Button color="green" title="Calcular" onPress={Calcular} />
      <Text style={styles.resultado}>{textoFinal}</Text>
    </SafeAreaView>
  );
}

