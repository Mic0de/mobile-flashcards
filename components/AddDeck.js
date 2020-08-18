import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { formatNewDeck } from "../utils/api";

class AddDeck extends Component {
  constructor() {
    super();
    this.state = {
      newDeckTitle: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleAddNewDeck = this.handleAddNewDeck.bind(this);
  }

  handleChangeTitle = (newDeckTitle) => {
    this.setState({ newDeckTitle });
  };

  handleAddNewDeck = () => {
    console.log("handleAddNewDeck()!");
    console.log("this.state.newDeckTitle", this.state.newDeckTitle);

    const { navigation, dispatch } = this.props;

    dispatch(addDeck(formatNewDeck(this.state.newDeckTitle)));

    this.setState({ newDeckTitle: "" });

    navigation.navigate("Deck", { deckKey: this.state.newDeckTitle });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.textLabel}>
          {" "}
          What is the title of your new deck?{" "}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Deck Title'
          value={this.state.newDeckTitle}
          onChangeText={this.handleChangeTitle}
        />
        <Button
          title='Add Deck'
          onPress={this.handleAddNewDeck}
          disabled={this.state.newDeckTitle.length < 1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    color: "blue",
    width: 200,
    height: 25,
    margin: 20,
  },
  textLabel: {
    fontSize: 25,
  },
});


export default connect(AddDeck);
