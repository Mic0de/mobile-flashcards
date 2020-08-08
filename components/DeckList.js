import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import {getAllDecks } from '../utils/api';
import { receiveData } from "../actions";

class DeckList extends Component {
  componentDidMount(){
    const {dispatch} = this.props;

    getAllDecks()
      .then((decks) => dispatch(receiveData(decks)))
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DeckList Screen</Text>
        <Text>{this.props.decks}</Text>
      </View>
    );
  }
}

function mapStateToProps (state, props) {
  console.log('state', state)
  console.log('props', props)
  const { decks } = state ;
  return {
    decks,
  }
}


export default connect(mapStateToProps)(DeckList)
