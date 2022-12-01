import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { textStyle } from '../styles/Text';


export class Recommendations extends Component {

  render() {
    return (
      <View style={{marginHorizontal: 20, marginVertical: 10, alignItems: 'center'}}>
        <View style={styles.container}>
          <Text style={textStyle.title}>Ejercicio Terapéutico</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Introducción al ejercicio terapéutico")}>
            <Text style={styles.buttonText}>Introducción</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Tipos de ejercicios terapéuticos")}>
            <Text style={styles.buttonText}>Ejercicios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={textStyle.title}>Manejo de la Cicatriz</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Preso-Terapia")}>
            <Text style={styles.buttonText}>Presoterapia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={textStyle.title}>Manejo del Dolor</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Manejo del dolor")}>
            <Text style={styles.buttonText}>Introducción</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginVertical: 10
  },

  button: {
    margin: 20
  },

  buttonText: {
    color: 'white'
   },
   button: {
    borderWidth: 1, 
    alignItems: 'center', 
    backgroundColor: '#005b96',
    opacity: 1,
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5
   }
})


export default Recommendations