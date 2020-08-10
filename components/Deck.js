import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Deck extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 28}}> Deck Name </Text>
        <Text style={{fontSize: 18, color: 'grey'}}># cards</Text>
        <Button title="Add Card" />
        <Button title="Start Quiz"/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
