import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getAllDecks } from "../utils/api";
import { receiveData } from "../actions";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getAllDecks().then((decks) => dispatch(receiveData(decks)));
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DeckList Screen</Text>
        {/* <Text>PROPS: {this.props}</Text> */}
        {/* <Text>STATE: {this.state.React}</Text> */}
        <Text>{JSON.stringify(this.props.decks.React.title)}</Text>
        {/* <TouchableOpacity>
          <Text style={{ fontSize: 28 }}> Deck Name </Text>
          <Text style={{ fontSize: 18, color: "grey", alignItems: 'center' }}># cards</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 28 }}> Deck Name </Text>
          <Text style={{ fontSize: 18, color: "grey", alignItems: 'center' }}># cards</Text>
        </TouchableOpacity> */}
      {/* {
        Object.entries(this.props.decks).map(([k,v]) => (
          <TouchableOpacity>
          <Text style={{ fontSize: 28 }}>{v.title} </Text>
          <Text style={{ fontSize: 18, color: "grey", alignItems: 'center' }}>{v.questions.length} cards</Text>
        </TouchableOpacity>
        ))
      } */}

      {Object.entries(this.props.decks).map(([k,v]) => (
        v.map(([k2,v2]) => (
          <TouchableOpacity>
                <Text style={{ fontSize: 28 }}>{v2.title} </Text>
                <Text style={{ fontSize: 18, color: "grey", alignItems: 'center' }}># cards</Text>
              </TouchableOpacity>
        ))
                
      ))}
        {/* <TouchableOpacity>
          <Text style={{ fontSize: 28 }}> Deck Name </Text>
          <Text style={{ fontSize: 18, color: "grey", alignItems: 'center' }}># cards</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  console.log("state", state);
  console.log("props", props);
  const { decks } = state;
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);
