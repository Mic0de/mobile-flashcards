import React, { Component } from "react";
import { View, Text, Button, Animated } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Deck extends Component {
  constructor() {
    super();
    this.state = {
      opacity: new Animated.Value(0),
      // width: new Animated.Value(0),
      // height: new Animated.Value(0),
    };
  }
  componentDidMount() {
    const { opacity } = this.state;
    // const { opacity, width, height } = this.state;
    Animated.timing(opacity, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
    // Animated.spring(width, { toValue: 400, speed: 12, useNativeDriver: false }).start();
    // Animated.spring(height, { toValue: 400, speed: 12, useNativeDriver: false }).start();
  }

  handleAddCard = () => {
    console.log("handleAddCard()!");
    const { navigation } = this.props;
    navigation.navigate("AddCard", { deck: this.props.deck });
  };
  handleStartQuiz = () => {
    console.log("handleStartQuiz()!");
    const { navigation } = this.props;
    navigation.navigate("StartQuiz", { deck: this.props.deck });
  };

  // handleDeleteDeck = () => {
  //   console.log("handleDeleteDeck()!");
  //   //TODO: dispatch deleteDeck, navigate back to deckList/home
  // }
  render() {
    const { opacity } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{ opacity, flex: 1 }}>
          <Text style={{ fontSize: 28 }}>{this.props.deck.title} </Text>
          <Text style={{ fontSize: 18, color: "grey" }}>
            {this.props.deck.questions.length} cards
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: "stretch",
              justifyContent: "space-around",
            }}
          >
            <Button
              title='Add Card'
              onPress={this.handleAddCard}
              color='green'
            />
            <Button title='Start Quiz' onPress={this.handleStartQuiz} />
            {/* <Button
            title='Delete This Deck'
            onPress={this.handleDeleteDeck}
            color='red'            
          /> */}
          </View>
        </Animated.View>
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
