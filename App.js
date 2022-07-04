import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      altura: '',
      setAltura: '',

      peso: '',
      setPeso: '',

      imc: '0',
      nivel: 'Classificação IMC'
    }

    this.calcular = this.calcular.bind(this)

  }

  calcular() {
    if (this.state.setAltura === '' || this.state.setPeso === '') {
      alert('Preencha todos os dados!')
      Keyboard.dismiss()
      return
    } else

      this.state.setAltura = parseFloat(this.state.setAltura)
    this.state.setPeso = parseFloat(this.state.setPeso)

    // this.setState({altura: this.state.setAltura})
    // this.setState({peso: this.state.setPeso})

    const altura = this.state.setAltura * this.state.setAltura
    const peso = this.state.setPeso
    const conta = peso / altura

    this.setState({ imc: conta.toFixed(2) })

    const dismiss = Keyboard.dismiss()

    if (conta < 18.5) {
      this.setState({ nivel: 'Abaixo do peso' })
      dismiss
      return
    } if (conta >= 18.5 && conta < 25) {
      this.setState({ nivel: 'Peso normal' })
      dismiss
      return
    } if (conta >= 25 && conta < 30) {
      this.setState({ nivel: 'Sobrepeso' })
      dismiss
      return
    } if (conta >= 30 && conta < 40) {
      this.setState({ nivel: 'Obesidade' })

    }
    else {
      this.setState({ nivel: 'Obesidade mórbida' })
    }
    dismiss
    return

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
              Altura (m):
            </Text>
            <TextInput style={styles.inputText} maxLength={4} keyboardType={'numeric'} onChangeText={(text) => this.setState({ setAltura: text })} />
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.text}>
              Peso (kg):
            </Text>
            <TextInput style={styles.inputText} maxLength={5} keyboardType={'numeric'} onChangeText={(text) => this.setState({ setPeso: text })} />
          </View>
          <TouchableOpacity style={styles.buttonArea} onPress={this.calcular}>
            <Text style={styles.buttonCalcText}>
              Calcular
            </Text>
          </TouchableOpacity>
          <View style={styles.resultArea}>
            <Text style={styles.resultText}>
              {this.state.imc}
            </Text>
            <Text style={styles.resultClassification}>
              {this.state.nivel}
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
    fontSize: 20
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#d1d0d7',
    borderRadius: 10,
    minWidth: 72,
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
