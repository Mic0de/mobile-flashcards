import React, { Component } from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
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
    const { navigation } = this.props;
    navigation.navigate("Deck", { deckKey: key });
  }

  renderItem = ({item}) => {
    const k = item[0];
    const v = item[1];
    return (
      <TouchableOpacity key={k} onPress={() => this.handleViewDeck(k)}>
            <Text
              style={{ fontSize: 28, justifyContent: "center", paddingTop: 5 }}
            >
              {v.title}
            </Text>
            <Text style={{ fontSize: 18, color: "grey", alignItems: "center" }}>
              {v.questions ? v.questions.length : 0} cards
            </Text>
          </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          keyExtractor={(item, index) => `${item[0]}-${index}}`}
          data={Object.entries(this.props.decks)}
          renderItem={this.renderItem}
        />
        {/* {Object.entries(this.props.decks).map(([k, v]) => (
          <TouchableOpacity key={k} onPress={() => this.handleViewDeck(k)}>
            <Text
              style={{ fontSize: 28, justifyContent: "center", paddingTop: 5 }}
            >
              {v.title}
            </Text>
            <Text style={{ fontSize: 18, color: "grey", alignItems: "center" }}>
              {v.questions ? v.questions.length : 0} cards
            </Text>
          </TouchableOpacity>
        ))} */}
      </SafeAreaView>
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
