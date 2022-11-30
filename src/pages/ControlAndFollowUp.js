import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../styles/Text'

export class ControlAndFollowUp extends Component {
  render() {
    return (
      <View>
        <Text style={textStyle.title}>Control y Seguimiento</Text>

        <Text style={textStyle.title}>Tips de plan de egreso</Text>
      </View>
    )
  }
}

export default ControlAndFollowUp