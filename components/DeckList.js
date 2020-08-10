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
  handleViewDeck = () => {    
    const { navigation } = this.props;
    navigation.navigate( "Deck");
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text>DeckList Screen</Text> */}

        {Object.entries(this.props.decks).map(([k, v]) => (
          <TouchableOpacity onPress={this.handleViewDeck}>
            <Text style={{ fontSize: 28, justifyContent: "center", paddingTop: 5, }}>{v.title} </Text>
            <Text style={{ fontSize: 18, color: "grey", alignItems: "center"}}>
              {v.questions.length} cards
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  console.log("state", state);
  console.log("props", props);
  const { decks } = state;
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
