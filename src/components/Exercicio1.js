import { View, Text } from 'react-native'
import React from 'react'

const Exercicio1 = ({nome}) => {
  return (
    <View>
      <Text>
        Olá, Bem-vindo(a) {nome}
      </Text>
    </View>
  )
}

export default Exercicio1