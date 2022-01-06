import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  {/*Função que calcula o icms*/}
  function acao(){

    const base = Number(price) + (Number(price) * Number(mva) /100)

    const int = Number(price) * Number(external_aliqut)/100

    const ext = base * Number(internal_aliqut)/100

    const final = (ext-int).toFixed(2)

    setResult((final).toString() + " R$")  
  }

  {/* os states */}

  const [ price, setPrice ] = useState("")
  const [ mva, setMva] = useState("")
  const [ internal_aliqut, setInternalAliq] = useState("")
  const [ external_aliqut, setExternalAliq] = useState("")
  const [ result, setResult] = useState("Icms-st")

  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.resultText}> { result } </Text>
      </View>

      <View style={ styles.campos }>

        {/* Campos preenchiveis */}
        <TextInput style={styles.Input} placeholder='Price' onChangeText={setPrice} ></TextInput>
        <TextInput style={styles.Input} placeholder='MVA' onChangeText={setMva}></TextInput>
        <TextInput style={styles.Input} placeholder='Internal Aliqut' onChangeText={setInternalAliq}></TextInput>
        <TextInput style={styles.Input} placeholder='External Aliqut' onChangeText={setExternalAliq}></TextInput>

        {/* botao de calculo */}
        <TouchableOpacity onPress={() => acao()} style={[styles.button, {backgroundColor: '#daa520'}]}>

          <Text> Calcular </Text></TouchableOpacity>


      </View>

      {/* Fazer os helps */}
      {/* <View style={styles.help}>
      <TouchableOpacity onPress={() => alert("help")} style={[styles.help, {backgroundColor: '#daa520'}]}>

          <Text> ? </Text></TouchableOpacity>

      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  result:{
    justifyContent: "center",
    alignItems:"center",
    width:"100%",
    height: 270,
    backgroundColor:"#f5f5f5",
  },
  resultText:{
    fontSize:25,
  },
  campos:{
    justifyContent: "center",
    alignItems:"center",
    alignContent:"center",
    textAlign:"center",
    top:10,
  },
  Input:{
    fontSize:24,
    marginTop:15,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#f5f5f5",
    textAlign:"center",
    width: 200,
    borderRadius: 20,
    height:40,
  },
  button:{
    fontSize:30,
    marginTop:10,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#f5f5f5",
    width: 200,
    borderRadius: 20,
    height:40,
  },
  help:{
    backgroundColor:"#daa520",
    justifyContent: 'flex-end',
    alignItems:"flex-end",
    
  }
});
