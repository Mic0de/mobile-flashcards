import React, { Component } from "react";
import { View, Text, Button, Spacer } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Deck extends Component {
  handleAddCard = () => {
    //TODO
    console.log("handleAddCard()!");
    const { navigation } = this.props;
    navigation.navigate("AddCard", {deck: this.props.deck});
  };
  handleStartQuiz = () => {
    //TODO
    console.log("handleStartQuiz()!");
    const { navigation } = this.props;
    navigation.navigate("StartQuiz", {deck: this.props.deck});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{ fontSize: 28 }}>{this.props.deck.title} </Text>
        <Text style={{ fontSize: 18, color: "grey" }}>
          {this.props.deck.questions.length} cards
        </Text>
        <View
          style={{ 
            flex: 1,
            alignItems: "stretch", 
            justifyContent: "space-around"
          }}
        >
          <Button
            title='Add Card'
            onPress={this.handleAddCard}
          />
          <Button
            title='Start Quiz'
            onPress={this.handleStartQuiz}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { deckKey } = props.route.params;
  const { decks } = state;

  console.log("deckKey", deckKey);

  return {
    deck: decks[deckKey],
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
