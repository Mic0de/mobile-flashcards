import React, { Component } from 'react'
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AddDeck extends Component {
    state = {
        newDeckTitle: null
    }

    handleAddNewDeck = () => {
        console.log('handleAddNewDeck()!');
        const { navigation } = this.props;
        navigation.navigate( "Deck List");
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textLabel}> What is the title of your new deck? </Text>
                <TextInput style={styles.textInput} placeholder='Deck Title' value={this.state.newDeckTitle} />
                {/* <TouchableOpacity onPress={this.handleAddNewDeck}> */}
                    <Button title='Add Deck' onPress={this.handleAddNewDeck}/>
                {/* </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        color: 'blue',
        width: 200, 
        height: 25,
        margin: 20
    },
    textLabel: {
        fontSize: 25
    }
    
})

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default AddDeck;

// export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
