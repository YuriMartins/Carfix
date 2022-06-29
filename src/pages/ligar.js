import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { Row, Col } from "react-bootstrap";
import ChatBot from 'react-simple-chatbot';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#F2F3F9',
  fontFamily: 'Poppins_400Regular',
  headerBgColor: '#282F66',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  
}

const steps = [
  
  {
    placeholder: 'Digite sua mensagem',
    id: "1",
    message: "Qual o seu nome?",
    trigger: "2",
  },
  {
    placeholder: 'Digite sua mensagem',
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    placeholder: 'Digite sua mensagem',
    id: "3",
    message: "oi {previousValue}, prazer em te conhecer!",
    trigger: "4",
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '4',
    message: 'O que você deseja fazer?',
    trigger: '5',
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '5',
    options: [
      { value: 1, label: 'Suporte', trigger: '6' },
      { value: 2, label: 'Contato', trigger: '8' },
      { value: 3, label: 'Meus Veiculos', trigger: '9' },
    ],
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '6',
    message: 'Qual a sua dúvida.',
    trigger: '7',
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '7',
    options: [
      { value: 1, label: 'Orçamentos', trigger: '4' },
      { value: 2, label: 'Meus veiculos', trigger: '4' },
      { value: 3, label: 'outros', trigger: '4' },
    ],
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '8',
    message: 'CarFix@gmail.com (11) 4002-8922',
    trigger: '4',
  },
  {
    placeholder: 'Digite sua mensagem',
    id: '9',
    message: 'Okay então, obrigado por usar nosso aplicativo.',
    end: true,
  },
]

export default function Ligar() {
  
  return (
    <>
      <View style={estilos.principal}>
          <View style={estilos.container}>
            <ThemeProvider theme={theme}>
              <ChatBot speechSynthesis={{ enable: true, lang: 'pt-br' }} steps={ steps }/>
            </ThemeProvider>
            <StatusBar style="auto" />
          </View>
        </View>     
    </>
  );
}

const estilos = StyleSheet.create({
  principal: {
    backgroundColor: "#F2F3F9",
    flex: 1,
    fontFamily: "Poppins_400Regular",
  },
  nav: {
    backgroundColor: "#F2F3F9",
    color: "#000",
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  texto: {
    color: "#F2F3F9",
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F3F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
