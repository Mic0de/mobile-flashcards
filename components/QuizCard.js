import React, { PureComponent } from "react";
import { Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class QuizCard extends PureComponent {
  render() {
    return (
      <View>
        <Text> Card for Quiz here! </Text>
        <Text>Question</Text>
        <TouchableOpacity>
          <Text>View The Answer</Text>
        </TouchableOpacity>
        <Text>Conditional Display Answer Here</Text>
        <Button title='Correct' color='green' />
        <Button title='Incorrect' color='red' />
      </View>
    );
  }
}
