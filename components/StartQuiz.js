import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class StartQuiz extends Component {
  render() {
    return (
      <View>
        <Text> StartQuiz </Text>
        {this.props.deck && this.props.deck.questions.length < 1 ? (
          <Text>
            ⛔Sorry, you cannot take this quiz because there are no cards in
            this deck.⛔
          </Text>
        ) : (
          <Text>{JSON.stringify(this.props.deck)}</Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  const { deck } = props.route.params;
  return {
    deck,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz);
