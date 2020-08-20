import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "./components/AddDeck";
import DeckList from "./components/DeckList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import StartQuiz from "./components/StartQuiz";
import { setLocalNotification } from "./utils/api";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Deck List'
        component={DeckList}
        options={{
          tabBarLabel: "Decks",
          tabBarIcon: ({ color, size }) => (
            <Feather name='list' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Add Deck'
        component={AddDeck}
        options={{
          tabBarLabel: "New Deck",
          tabBarIcon: ({ color, size }) => (
            <Feather name='folder-plus' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={TabNav} />
      <Stack.Screen name='Deck' component={Deck} />
      <Stack.Screen name='AddCard' component={AddCard} />
      <Stack.Screen name='StartQuiz' component={StartQuiz} />

      <Stack.Screen name='Deck List' component={DeckList} />
      <Stack.Screen name='Add Deck' component={AddDeck} />
    </Stack.Navigator>
  );
};
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </Provider>
    );
  }
}
