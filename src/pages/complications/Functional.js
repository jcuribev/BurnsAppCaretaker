import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../styles/Text'

export class Functional extends Component {
  render() {
    return (
      
      <View>
        <Text style={textStyle.title}>Functional</Text>
        <Button style={{ marginHorizontal: 20 }}
          title="Recomendaciones"
          onPress={() => console.log(this.props.navigation.navigate("Recomendaciones"))}
        />
      </View>
    )
  }
}

export default Functional