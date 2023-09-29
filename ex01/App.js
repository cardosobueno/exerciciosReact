import { Text, SafeAreaView, StyleSheet, View , Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


export default function App() {
  
  return (
    <View>
      <Text style={styles.title}>
        André Bueno
      </Text>
      <Image source={{ uri: 'https://media.licdn.com/dms/image/C4D03AQFSNvN2WJt66w/profile-displayphoto-shrink_800_800/0/1661190184817?e=2147483647&v=beta&t=P--5l83-hu18X0Yb7NJrQbmnr9IY5gXbqcKu019PdCo'}} 
      style={{ width: 150, height: 200, borderRadius: 10, justifyContent: 'center', marginLeft: 100, marginBottom: 25}}
/>

    <Text style={styles.subtitle}>
    Dados:
    </Text>
    <Text style={styles.paragraph}>
    20 anos
    </Text>

    <Text style={styles.subtitle}>
    Formação:
    </Text>
    <Text style={styles.paragraph}>
    Jogos Digitais - ETEC Aristóteles Ferreira
    </Text>
   
    <Text style={styles.subtitle}>
    Experiência:
    </Text>
    <Text style={styles.paragraph}>
    Edição de vídeos, modelagem e animação 3D - UNICASERV
    </Text>
     <Text style={styles.subtitle}>
    Projetos:
    </Text >
    <Text style={styles.paragraph}>
    Youtube, ChefMaker
    </Text>
     </View>
   
  );
}

const styles = StyleSheet.create({


  

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 10,
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    margin:2,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    
  },
   paragraph: {
    margin:2,
    fontSize: 15,
    fontWeight: 'light',
    marginLeft: 15,
    padding: 5,
    
  },
});