import React from 'react'
import { View, Text } from 'react-native'
import KiltButton from './KiltButton'
import {
  mainViewContainer,
  sectionContainer,
  flexRowEndLayout,
} from './styles/utils.layout'
import {
  bodyTxt,
  mainTitleTxt,
  sectionTitleTxt,
} from './styles/utils.typography'
import { IDENTITY_CREATION } from './routes'

type Props = {
  navigation: any
}

class Introduction extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  }

  render(): React.ReactNode {
    const { navigate } = this.props.navigation
    return (
      <View style={mainViewContainer}>
        <View style={sectionContainer}>
          <Text style={mainTitleTxt}>Claim independence.</Text>
        </View>
        <View style={sectionContainer}>
          <Text style={sectionTitleTxt}>
            This is your very own KILT wallet.
          </Text>
          <Text style={bodyTxt}>Here, you can... (description)</Text>
        </View>
        <View style={sectionContainer}>
          <View style={flexRowEndLayout}>
            <KiltButton
              title="Get started >"
              onPress={() => navigate(IDENTITY_CREATION)}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Introduction
