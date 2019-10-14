/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'

import Setup from './Setup'
import Home from './Home'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const RootStack = createSwitchNavigator({
  Setup: {
    screen: Setup,
  },
  Home: {
    screen: Home,
  },
})

const App = createAppContainer(RootStack)

export default App
