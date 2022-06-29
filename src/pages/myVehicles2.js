import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import { Card } from 'react-native-paper';
import Search from '../../src/component/search';




export default function MyVehicles2({ navigation }) {
  
  return (
    
    <View style={styles.main}>
      <ScrollView>
      <View style={styles.main2}>
      <TouchableOpacity style={styles.button1} activeOpacity={0.5}>
      <Image style={styles.image1} source={require('../../assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.textTitle}>Meus veiculos</Text>
      </View>
      
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.textButton}>+</Text>
        <Text style={styles.textButton2}>Novo Orçamento</Text>
      </TouchableOpacity>
      <Text style={styles.paragraph3}>Orçamentos</Text>
      
      <View>
      
        <Search/>   
        <View style={styles.hr1}></View>
      
      </View>
      
      <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
    <Card.Content>
      <Text style={styles.textCard1}>Orçamento #003</Text>
      <Text style={styles.textCard2}>Data de Ínicio: 20/09/2021                             Data de Termino: ----
      </Text>
      <Text style={styles.textCard3}>Status: Em Andamento</Text>
      <Text style={styles.textCard4}>Valor: R$ 820,76 </Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
    <Card.Content>
      <Text style={styles.textCard1}>Orçamento #002</Text>
      <Text style={styles.textCard2}>Data de Ínicio: 20/09/2021                             Data de Termino: ----
      </Text>
      <Text style={styles.textCard3}>Status: Em Andamento</Text>
      <Text style={styles.textCard4}>Valor: R$ 820,76 </Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
    <Card.Content>
      <Text style={styles.textCard1}>Orçamento #001</Text>
      <Text style={styles.textCard2}>Data de Ínicio: 20/09/2021                             Data de Termino: ----
      </Text>
      <Text style={styles.textCard3}>Status: Em Andamento</Text>
      <Text style={styles.textCard4}>Valor: R$ 820,76 </Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>
  </ScrollView>
  
    </View>
    
      );
    }


const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    backgroundColor: "#F2F3F9",
    height: '100%'
    
  },
  main2: {
    flexDirection: 'row',
    
  },
  image1: {
    marginTop: 20,
    width: 30,
    height: 50,
  },
  paragraph3: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 36,
    color: "#000000"
  },
    button: {
    width: 180,
    height: 45,
    marginLeft: 150,
    borderRadius: 5,
    backgroundColor: '#282F66',
    justifyContent: "center",
    alignItems: 'left',
    marginTop: 35
  },
  textButton: {
    marginLeft: 5,
    fontFamily: '',
    height: 20,
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingBottom: 23,
  },
  textButton2: {
    marginLeft: 8,
    fontFamily: '',
    fontSize: 15,
    paddingBottom: 23,
    fontWeight: '700',
    color: '#FFFFFF',
    paddingLeft: 30,
  },
  button2: {
    borderRadius: 5,
    width: 310,
    height: 120,
    justifyContent: "center",
    alignItems: 'left',
    marginTop: 30,
    
  },
  card1: {
    marginTop: 20,
    background: '#FDFCFF',
    shadowRadius: 5,
    borderRadius: 5,
    width: 310,
    height: 120,
    marginLeft: 20,
    flexDirection: 'row',
    
  },
  textTitle: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 23,
    color: "#000000",
  },
  textCard1: {
    marginTop: -6,
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 23,
    color: "#000000",
  },
  textCard2: {
    marginTop: 15, 
    fontSize: 13,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 12,
    color: "#000000"
  },
  textCard3: {
    marginLeft: 200,
    marginTop: -60,
    fontSize: 13,
    fontStyle: "normal",
    lineHeight: 16,
    color: "#000000"
  },
  textCard4: {
    marginLeft: 175,
    marginTop: 50,
    fontSize: 13,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#000000"
  },
  hr1: {
    width: 300,
    height: 2, 
    marginLeft: 20,
    marginEnd: 30,
    backgroundColor: "#282F66",
  }
});