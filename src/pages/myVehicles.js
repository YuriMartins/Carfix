import * as React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';


export default function MyVehicles({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Meus Veículos</Text>
      <ScrollView>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={'MyVehicles2'}>
        <Text style={styles.textButton}>+</Text>
        <Text style={styles.textButton2}>Adicionar Veículos</Text>
      </TouchableOpacity>
    
      
      <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
      <Image style={styles.image1} source={require('../../assets/image6.png')} />
      <Image style={styles.image2} source={require('../../assets/akar-icons_gear.png')} />
    <Card.Content>
      <Text style={styles.textCard1}>Chevrolet Onix</Text>
      <Text style={styles.textCard2}>ABC-1234</Text>
      <Text style={styles.textCard3}>Visualizar Orçamentos</Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
      <Image style={styles.image1} source={require('../../assets/kisspng-2018-bmw-320i-xdrive-car-320-i-vehicle-5b1c252411ea40 1.png')} />
      <Image style={styles.image2} source={require('../../assets/akar-icons_gear.png')} />
    <Card.Content>
      <Text style={styles.textCard1}>BMW 320i</Text>
      <Text style={styles.textCard2}>EFG-6789</Text>
      <Text style={styles.textCard3}>Visualizar Orçamentos</Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
      <Card style={styles.card1}>
      <Image style={styles.image1} source={require('../../assets/image6.png')} />
      <Image style={styles.image2} source={require('../../assets/akar-icons_gear.png')} />
    <Card.Content>
      <Text style={styles.textCard1}>Chevrolet Onix</Text>
      <Text style={styles.textCard2}>ABC-1234</Text>
      <Text style={styles.textCard3}>Visualizar Orçamentos</Text>
    </Card.Content>
  </Card>
  </TouchableOpacity>
  </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: "#F2F3F9",
    height: '100%'
  },
  paragraph: {
    marginTop: 50,
    fontFamily: '',
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: '540',
    color: "#282F66",
    marginLeft: 20,
    textAlign: 'left'
  },
  
  button: {
    width: 180,
    height: 45,
    marginLeft: 150,
    borderRadius: 5,
    backgroundColor: '#282F66',
    justifyContent: "center",
    alignItems: 'left',
    marginTop: 25
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
    marginLeft: 4,
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
  image1:{
    marginTop: 24,
    width: 120,
    height: 60
  },
  image2:{
    marginLeft: 290,
    marginTop: -80,
    width: 15,
    height: 15
  },
  textCard1: {
    marginLeft: 130,
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 25,
    color: "#000000"
  },
  textCard2: {
    marginTop: 1,
    marginLeft: 130,
    fontSize: 10,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 12,
    color: "#000000"
  },
  textCard3: {
    marginLeft: 150,
    marginTop: 25,
    fontSize: 13,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 16,
    color: "#000000"
  }  

});
