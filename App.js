import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {

  //Função que retorna a mesagem do help
  function help(){
    alert("O campo Price deve conter o valor do produto - descontos + frete"+ "\n\n" + "O campo do mva deve conter o valor do mva em porcentagem" + "\n\n" +"O campo de alíquota interna considera DESTINO -> DESTINO" + "\n\n" +"O campo alíquota externa considera ORIGEM -> DESTINO" + "\n\n" + " O campo IPI deve conter o valor do ipi sobre p produto.")
  }

  {/*Função que calcula o icms*/}
  function acao(){

    //validação das entradas
    if(price =='' || isNaN(price)){
      alert("Insira o valor do subtotal!")
      return
    }

    else if(mva == "" || isNaN(mva)){
      alert("Insira o mva!")
      return
    }

    else if( internal_aliqut =="" || isNaN(internal_aliqut) || external_aliqut == "" || isNaN(external_aliqut) ){
      alert("Prencha as alíquotas corretamente!")
    }


    var IPI = 0


    //caso tenha ipi
    // if( ipi != "" ){
      
    //   var IPI = (Number(price) * Number(ipi) / 100).toFixed(2) 

    // }

    // alert(IPI)
  
    // const base = Number(price) - Number(IPI) + (Number(price) * Number(mva) /100)

    // const int = Number(price) * Number(external_aliqut)/100

    // const ext = base * Number(internal_aliqut)/100

    

    //new calc

    const icmsBaseInter = Number(price)

    const icmsInter = icmsBaseInter * ( internal_aliqut/100 )

    const icmsBase = (Number(price) + Number(ipi)) + ((Number(price) + Number(ipi)) * Number(mva)/100 )

    const final = ((icmsBase * Number(external_aliqut)/100) - icmsInter).toFixed(2)

    setResult((final).toString() + " R$")
    
  }

  {/* os states */}

  const [ price, setPrice ] = useState("")
  const [ mva, setMva] = useState("")
  const [ internal_aliqut, setInternalAliq] = useState("")
  const [ external_aliqut, setExternalAliq] = useState("")
  const [ result, setResult] = useState("Preencha os campos abaixo!")

  const [ ipi, setIpi ] = useState("")


  return (
    
    
    
    <View>



      <View style={styles.icms_st}>
        <View style={styles.result}>
          <Text style={styles.resultText}> { result } </Text>
        </View>

        <View style={ styles.campos }>

          {/* Campos preenchiveis */}
          <TextInput style={styles.Input} placeholder='Price' onChangeText={ setPrice } ></TextInput>
          <TextInput style={styles.Input} placeholder='MVA' onChangeText={ setMva }></TextInput>
          <TextInput style={styles.Input} placeholder='External aliquot' onChangeText={ setInternalAliq }></TextInput>
          <TextInput style={styles.Input} placeholder='Internal aliquot' onChangeText={ setExternalAliq }></TextInput>
           <TextInput style={styles.Input} placeholder='IPI' onChangeText={ setIpi }></TextInput>

          {/* botao de calculo */}
          <TouchableOpacity onPress={() => acao()} style={[styles.button, {backgroundColor: '#daa520'}]}>

            <Text styles={{fontSize:30}}> Calcular ! </Text></TouchableOpacity>

          {/* botao de help */}
          <TouchableOpacity onPress={() => help()} style={[styles.button, {backgroundColor: '#8fbc8f'}]}>

            <Text> Help ! </Text></TouchableOpacity>

        </View>

        {/* Fazer os helps */}
        {/* <View style={styles.help}>
        <TouchableOpacity onPress={() => alert("help")} style={[styles.help, {backgroundColor: '#daa520'}]}>

            <Text> ? </Text></TouchableOpacity>

        </View> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  menu:{
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    top:100,
    
  },
  option:{
    backgroundColor:"#daa520",
    height:35,
    borderRadius:15,
    marginTop:20,
  },
  text:{
    fontSize:25,
    textAlign:'center'
  },
  
  icms_st:{
    display:"flex",
  },
  result:{
    justifyContent: "center",
    alignItems:"center",
    width:"100%",
    height: 220,
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
    fontSize:22,
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
