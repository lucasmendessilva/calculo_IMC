import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calcularImc = () => {
    let exibir = '';
    const resultado = peso / Math.pow(altura, 2);
    console.log(resultado);

    if (resultado < 18.5) {
      exibir = 'Abaixo do Peso!';
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      exibir = 'Peso Normal!';
    } else if (resultado >= 25 && resultado <= 29.9) {
      exibir = 'Sobrepeso!';
    } else if (resultado >= 30 && resultado <= 34.9) {
      exibir = 'obesidade Grau 1!';
    } else if (resultado >= 35 && resultado <= 39.9) {
      exibir = 'obesidade Grau 2!';
    } else if (resultado > 40) {
      exibir = 'obesidade Grau 3!';
    } else {
      exibir = 'Erro!';
    }

    Alert.alert(exibir);
  };

  return (
    <View style={estilo.inicio}>
      <View style={estilo.container}>
        <View style={estilo.altura}>
          <Text style={estilo.textos}>Digite a Altura</Text>
          <TextInput
            style={estilo.inputs}
            value={altura}
            keyboardType="numeric"
            onChangeText={texto => setAltura(texto)}
          />
        </View>
        <View style={estilo.peso}>
          <Text style={estilo.textos}>Digite o Peso</Text>
          <TextInput
            style={estilo.inputs}
            value={peso}
            keyboardType="numeric"
            onChangeText={texto => setPeso(texto)}
          />
        </View>
      </View>
      <View style={estilo.botao}>
        <Button title={'Calcular'} onPress={calcularImc} />
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  inicio: {
    marginTop: 10,
  },
  textos: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  container: {
    flexDirection: 'row',
  },
  inputs: {
    height: 40,
    width: 70,
    marginTop: 10,
    borderColor: '#5D6D7E',
    borderWidth: 1,
  },
  botao: {
    marginTop: 30,
    marginHorizontal: 50,
  },
  altura: {
    alignItems: 'center',
    marginLeft: 10,
  },
  peso: {
    marginLeft: 160,
    alignItems: 'center',
  },
});

export default App;
