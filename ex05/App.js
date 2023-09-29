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
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [textoFinal, setTextoFinal] = useState('');

  function Calcular() {
    resultado = (peso / Math.pow(altura, 2))
    
    if (resultado < 16.9) {
     setTextoFinal('Muito abaixo do peso');
    } else if (resultado > 17 && resultado < 18.4) {
      setTextoFinal('Abaixo do peso');
    } else if (resultado > 18.5 && resultado < 24.9) {
      setTextoFinal('Peso Normal');
    } else if (resultado < 25 && resultado > 29.9) {
      setTextoFinal('Acima do peso');
    } else if (resultado > 30 && resultado < 34.9) {
      setTextoFinal('Obesidade grau I');
    } else if (resultado > 35 && resultado < 40) {
     setTextoFinal('Obesidade grau II');
    } else if (resultado > 40) {
     setTextoFinal('Obesidade grau III');
    }

    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Calculo IMC</Text>

      <Image
        source={{
          uri: 'https://superafarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png',
        }}
        style={{
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}
      />
      <TextInput style={styles.texto} placeholder="Digite o peso " onChangeText={setPeso} />
      <TextInput style={styles.texto} placeholder="Digite a altura" onChangeText={setAltura} />

      <Button color="green" title="Calcular" onPress={Calcular} />
      <Text style={styles.resultado}>{textoFinal}</Text>
    </SafeAreaView>
  );
}

