import React, { Component } from "react";
import { View, Text, Button, Spacer } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Deck extends Component {

  handleAddCard = () => {
    //TODO
    console.log("handleAddCard()!");        
    const { navigation } = this.props;
    navigation.navigate( "AddCard");
  }
  handleStartQuiz = () => {
    //TODO
    console.log("handleStartQuiz()!")
    const { navigation } = this.props;
    navigation.navigate( "StartQuiz");
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 28}}> Deck Name </Text>
        <Text style={{fontSize: 18, color: 'grey'}}># cards</Text>
        <Button title="Add Card" style={{margin: 25}} onPress={this.handleAddCard} />
        {/* <Spacer size={10} /> */}
        <Button title="Start Quiz" style={{margin: 25}} onPress={this.handleStartQuiz} />
      </View>
    );
  }
}

const mapStateToProps = (state,props) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
