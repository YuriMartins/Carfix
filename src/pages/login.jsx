import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Bem Vindo de Volta!</Text>
      <Text style={styles.subtitle}>
        Insira suas credencias de login para entrar no Aplicativo.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
        <Text style={[styles.subtitle,{textAlign: 'center', margin: 25, fontSize: 20}]}>
        Cadastrar
      </Text>
       <Text style={[styles.subtitle,{textAlign: 'center', margin: 25}]}>
        Esqueci minha Senha
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 115,
  },
  paragraph: {
    fontFamily: 'Nunito',
    fontSize: 34,
    fontWeight: '700',
    color: '#2D3573',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'Nunito',
    fontSize: 17,
    color: '#000000',
    paddingLeft: 7,
    textAlign: 'center',
    paddingBottom: 20
  },
  input: {
    width: 300,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#F5F7F9',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'rgba(40, 47, 102, 1.0)',
    marginLeft: 55,
    marginTop: 10,
    paddingLeft: 20,
    color: '#000000',
  },
  button: {
    width: 300,
    height: 70,
    marginLeft: 55,
    borderRadius: 5,
    backgroundColor: '#282F66',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10
  },
  textButton: {
    fontFamily: 'Oxygen',
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
