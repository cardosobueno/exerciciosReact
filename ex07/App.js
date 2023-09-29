import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Switch, Button } from 'react-native';
import { TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

import { Card } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import {styles} from './styles'

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escola, setEscola] = useState('');
  const [valor, setValor] = useState(0);
  const [status, setStatus] = useState(false);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  function retornarValores() {
    // Quando o botão é clicado, definimos mostrarResultados como true
    setMostrarResultados(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Abertura de conta</Text>
      <Card>
        <Text style={styles.texto}>Nome:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.texto}>Idade:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setIdade(text)}
        />
        <Text style={styles.texto}>Sexo:</Text>
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />
          <Picker.Item key={3} value={"Outros"} label="Outros" />
        </Picker>

        <Text style={styles.texto}>Escolaridade:</Text>
        <Picker
          style={styles.input}
          selectedValue={escola}
          onValueChange={(itemValue) => setEscola(itemValue)}
        >
          <Picker.Item
            key={1}
            value={"Ensino Fundamental Completo"}
            label="Ensino Fundamental Completo"
          />
          <Picker.Item
            key={2}
            value={"Ensino Fundamental Incompleto"}
            label="Ensino Fundamental Incompleto"
          />
          <Picker.Item
            key={3}
            value={"Ensino Médio Completo"}
            label="Ensino Médio Completo"
          />
          <Picker.Item
            key={4}
            value={"Ensino Médio Incompleto"}
            label="Ensino Médio Incompleto"
          />
          <Picker.Item
            key={5}
            value={"Ensino Superior Completo"}
            label="Ensino Superior Completo"
          />
          <Picker.Item
            key={6}
            value={"Ensino Superior Incompleto"}
            label="Ensino Superior Incompleto"
          />
        </Picker>

        <Text style={styles.texto}>Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={2000}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          value={valor}
        />

        <Text style={{ textAlign: 'center', fontSize: 20 }}>
         R$: {valor.toFixed(2)}
        </Text>

        <Text style={styles.texto}>Brasileiro:</Text>
        <Switch
          value={status}
          onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        />

        <Button title="Confirmar" onPress={retornarValores} />

        {mostrarResultados && (
          <>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Sexo: {sexo}</Text>
            <Text>Escolaridade: {escola}</Text>
            <Text>Limite: {valor.toFixed(2)}</Text>
            <Text>Brasileiro: {status ? 'Sim' : 'Não'}</Text>
          </>
        )}
      </Card>
    </SafeAreaView>
  );
}

