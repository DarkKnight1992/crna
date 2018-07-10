//import liraries
import React from 'react';
import { StackNavigator, SwitchNavigator } from "react-navigation";
import LoginForm from "./loginform"
import Homepage from "./homepage"
import AddIdea from "./addidea"

const AuthStack = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: "Login"
    }
  }
})

const AppStack = StackNavigator({
  Ideas: {
    screen: Homepage,
    navigationOptions: {
      headerTitle: "Ideas"
    }
  },
  AddIdea: {
    screen: AddIdea,
    navigationOptions: {
      headerTitle: "AddIdea"
    }
  }
});

export default SwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
)
