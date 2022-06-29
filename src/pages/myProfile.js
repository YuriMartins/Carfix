import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';
import { Row, Col } from "react-bootstrap";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';


function MyProfile(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Leonardo Rodrigues</Text>
      <Text style={styles.perfil}>Meu Perfil</Text>
      <Text style={styles.subtitle}>Minhas Informações:</Text>
      <Text style={styles.text}>Nome: Leonardo Rodrigues</Text>
      <Text style={styles.text}>Email: leonardo@darede.com</Text>
      <Text style={styles.text}>Telefone: (11) 9999-9999</Text>
      <Text style={styles.subtitle}>Editar Informações:</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditProfile")}
      >
        <Text style={styles.btntext}>Alterar Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("EditPass")}>
        <Text style={styles.btntext}>Alterar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exit}>
        <Text style={styles.sairDaAplicacao}>Sair da Aplicação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,243,249,1)"
  },
  username: {
    fontFamily: "nunito-700",
    color: "rgba(40,47,102,1)",
    fontSize: 34,
    marginTop: 79,
    marginLeft: 40
  },
  perfil: {
    fontFamily: "nunito-600",
    color: "#121212",
    fontSize: 16,
    marginTop: 7,
    marginLeft: 160
  },
  subtitle: {
    fontFamily: "nunito-700",
    color: "#121212",
    fontSize: 19,
    marginTop: 38,
    marginLeft: 20
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 21
  },
  button: {
    width: 280,
    height: 61,
    backgroundColor: "#282f66",
    borderRadius: 5,
    marginTop: 23,
    marginLeft: '10%'
  },
  btntext: {
    fontFamily: "nunito-600",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 15,

    textAlign: "center"
  },
  exit: {
    width: 173,
    height: 36,
    marginTop: 114,
    marginLeft: 94
  },
  sairDaAplicacao: {
    fontFamily: "nunito-regular",
    color: "#121212",
    marginTop: 9,
    marginLeft: 30,
    textAlign: "center"
  }
});

export default MyProfile;
