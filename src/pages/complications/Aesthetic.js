import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { color, RotateInUpLeft } from 'react-native-reanimated'
import { textStyle } from '../../styles/Text'

export class Aesthetic extends Component {

  render() {
    return (
      <View>
        <Text style={textStyle.title}>Estéticas</Text>
        <View style={{ marginHorizontal: 20 }}>
          <TouchableOpacity key={"Recommendations"} style={styles.button} onPress={() => this.props.navigation.navigate("Recomendaciones")}>
            <Text style={styles.buttonText}>Recomendaciones</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   buttonText: {
    color: 'white'
   },
   button: {
    borderWidth: 1, 
    alignItems: 'center', 
    backgroundColor: '#005b96',
    opacity: 1,
    borderRadius: 5,
    padding: 5
   }
})

export default Aesthetic