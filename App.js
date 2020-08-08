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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Decks' component={DeckList} />
          <Tab.Screen name='Add Deck' component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default function App() {
  return <MyStack />;
}
