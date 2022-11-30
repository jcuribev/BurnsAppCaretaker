import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'
import { RotateInUpLeft } from 'react-native-reanimated'
import { textStyle } from '../../styles/Text'

export class Aesthetic extends Component {

  render() {
    return (
      <View>
        <Text style={textStyle.title}>Estéticas</Text>
        <View style={{ marginHorizontal: 20 }}>
          <Button
            title="Recomendaciones"
            onPress={() => this.props.navigation.navigate("Recomendaciones")}
          />
        </View>
      </View>
    )
  }
}
export default Aesthetic