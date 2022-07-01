import React from 'react';
import {Component} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = { 

   }

  }
  render() { 
    return ( 
      <View style={styles.container}>

        <View style={styles.topArea}>
          <Text style={styles.topTitle}>
            Calcule seu IMC
          </Text>

          <Text style={styles.topText}>
            O IMC (Índice de Massa Corporal) é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal.
          </Text>
        </View>

        <View style={styles.bottomArea}>

          <View style={styles.inputArea}>
            <Text style={styles.text}>
              Altura:
            </Text>
            <TextInput style={styles.inputText}/>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.text}>
              Peso:
            </Text>
            <TextInput style={styles.inputText}/>
          </View>

          <TouchableOpacity style={styles.buttonArea}>
            <Text style={styles.buttonCalcText}>
              Calcular
            </Text>
          </TouchableOpacity>

          <View style={styles.resultArea}>
            <Text style={styles.resultText}>
              24,12
            </Text>

            <Text style={styles.resultClassification}>
              Classificação IMC
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonArea}>
            <Text style={styles.buttonDescriptionText}>
              Descrição
            </Text>
          </TouchableOpacity>
          
          

        </View>

      </View>
     );
  }
}
 
const styles = StyleSheet.create({

  // Container

  container: {
    flex: 1,
    backgroundColor: '#00b4fc'
  },

  // Top Area - Parte de cima

  topArea: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },

  topTitle: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },

  topText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 24,
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Bottom Area - Parte de baixo

  bottomArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 36
  },

  // Inputs

  inputArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  text: {
    fontSize: 24
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#d1d0d7',
    borderRadius: 10,
    minWidth: 64,
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  // Botões

  buttonArea: {
    alignItems: 'center',
    marginVertical: 24,
  },

  buttonCalcText: {
    backgroundColor: '#3e6b48',
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },

  buttonDescriptionText: {
    backgroundColor: '#00b4fc',
    color: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 96,
    borderRadius: 10,
    fontSize: 18,

  },
  
  // Resultado

  resultArea: {
    alignItems: 'center'
  },

  resultText: {
    fontSize: 60
  },

  resultClassification: {
    fontSize: 24,
    marginVertical: 20
  }
});

export default App;
