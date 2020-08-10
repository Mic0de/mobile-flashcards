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
import { Deck } from "./components/Deck";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name='Deck' component={Deck} />
      </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Deck List' component={DeckList} />
        <Tab.Screen name='Add Deck' component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
  <Provider store={createStore(reducer, middleware)}>
    <TabNav />
  </Provider>);
}
