import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { addCard } from "../actions";

class AddCard extends Component {
  constructor() {
    super();
    this.state = {
      question: '',
      answer: '',
    };
    this.handleAddNewCard = this.handleAddNewCard.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleAddNewCard = () => {
    console.log("this.state.question", this.state.question);
    console.log("this.state.answer", this.state.answer);    
    console.log("handleAddNewCard()!");

    const { navigation, dispatch } = this.props;   

    // TODO: Dispatch addNewCard!
    dispatch(addCard( this.state.question, this.state.answer, this.props.deck))
 
    // navigation.navigate( "Deck List");
  };

  handleQuestionChange(question){
      this.setState({question})
  }
  handleAnswerChange(answer){
      this.setState({answer})
  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}
      >
        <TextInput
          style={styles.textInput}
          placeholder='Write a question here'
            value={this.state.question}
          onChangeText={this.handleQuestionChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Write an answer here'
            value={this.state.answer}
          onChangeText={this.handleAnswerChange}
        />
        <Button
          disabled={
            this.state.question.length < 1 ||
            this.state.answer.length < 1
          }
          title='Add Card'
          onPress={this.handleAddNewCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    color: "blue",
    width: 400,
    height: 50,
    margin: 20,
  },
  textLabel: {
    fontSize: 25,
  },
});

function mapStateToProps(state, props) {
    const { deck } = props.route.params;
  
    return {
      deck
    };
}


export default connect(mapStateToProps)(AddCard);
