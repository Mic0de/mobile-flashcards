import React, { Component } from "react";
import { View, Text, Button, Animated } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QuizCard from "./QuizCard";
import { TouchableOpacity } from "react-native-gesture-handler";

class StartQuiz extends Component {
  constructor() {
    super();
    this.state = {
      cardIndex: 0,
      totalCorrect: 0,
      showAnswer: false,
      usersAnswer: null
    };
  }
 

  // Record answer if correct, increment card index if not at last card, and reset values
  handleAnswerCard = (answer) => {
    this.setState((prevState, props) => ({
      cardIndex: prevState.cardIndex + 1,
      totalCorrect:
        answer === "correct"
          ? prevState.totalCorrect + 1
          : prevState.totalCorrect,
      showAnswer: false,
      usersAnswer: null,
      opacity: new Animated.Value(0),
    }));
  };

  restartQuiz = () => {
    console.log("restartQuiz()!");
    this.setState(() => ({
      cardIndex: 0,
      totalCorrect: 0,
      showAnswer: false,
      usersAnswer: null,
      opacity: new Animated.Value(0),
      width: new Animated.Value(0),
      height: new Animated.Value(0),
    }));
  };

  render() {
    const numberOfCards = this.props.deck.questions.length;
    return (
      <View style={{ flex: 1 }}>
        {this.props.deck && numberOfCards < 1 ? (
          <Text>
            ⛔Sorry, you cannot take this quiz because there are no cards in
            this deck.⛔
          </Text>
        ) : (
          <View style={{ flex: 1 }}>
            {numberOfCards >= this.state.cardIndex + 1 ? (
              <View style={{ flex: 1 }}>
                  <Text>
                    {this.state.cardIndex + 1} / {numberOfCards}
                  </Text>
                  <Text style={{ fontSize: 50}}>
                    {this.props.deck.questions[this.state.cardIndex].question}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState(() => ({ showAnswer: true }));
                    }}
                  >
                    <Text style={{ color: "blue" }}>View The Answer</Text>
                  </TouchableOpacity>
                  {this.state.showAnswer && (
                    <Text style={{ fontSize: 30, fontStyle: "italic" }}>
                      {this.props.deck.questions[this.state.cardIndex].answer}
                    </Text>
                  )}
                  <Button
                    title='Correct'
                    color='green'
                    onPress={() => this.handleAnswerCard("correct")}
                  />
                  <Button
                    title='Incorrect'
                    color='red'
                    onPress={() => this.handleAnswerCard("incorrect")}
                  />
              </View>
            ) : (
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 40, color: "blue" }}>🏆🥇🏁</Text>
                <Text style={{ fontSize: 40, color: "blue" }}>
                  {((this.state.totalCorrect / numberOfCards) * 100).toFixed(2)}
                  % Correct
                </Text>
                <Text style={{ fontSize: 40, color: "blue" }}>🏁🥇🏆</Text>
                <Button title='Restart Quiz' onPress={this.restartQuiz} />
                <Button
                  title='Back To Deck'
                  onPress={() => {
                    this.props.navigation.navigate("Deck", {
                      deckKey: this.props.deck.title,
                    });
                  }}
                />
              </View>
            )}
          </View>
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
