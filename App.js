import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "./components/AddDeck";
import DeckList from "./components/DeckList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import  Deck  from "./components/Deck";
import AddCard from "./components/AddCard";
import StartQuiz from './components/StartQuiz'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Deck List' component={DeckList} />
      <Tab.Screen name='Add Deck' component={AddDeck} />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNav} />
        <Stack.Screen name='Deck' component={Deck} />
        <Stack.Screen name='AddCard' component={AddCard} />
        <Stack.Screen name='StartQuiz' component={StartQuiz} />
        
        
      <Stack.Screen name='Deck List' component={DeckList} />
      <Stack.Screen name='Add Deck' component={AddDeck} />
      </Stack.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
}
