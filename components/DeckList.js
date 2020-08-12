import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getAllDecks } from "../utils/api";
import { receiveData } from "../actions";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    getAllDecks().then((decks) => dispatch(receiveData(decks)));
  }
 
    handleViewDeck(key) {
      console.log('key', key)
    const { navigation } = this.props;
    navigation.navigate( "Deck", {deckKey: key});
    }

  // }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {Object.entries(this.props.decks).map(([k, v]) => (
          <TouchableOpacity key={k} onPress={() => this.handleViewDeck(k)}>
            <Text style={{ fontSize: 28, justifyContent: "center", paddingTop: 5, }}>{v.title} </Text>
            <Text style={{ fontSize: 18, color: "grey", alignItems: "center"}}>
              {v.questions ? v.questions.length  : 0} cards
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { decks } = state;
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
