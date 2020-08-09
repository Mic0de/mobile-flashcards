import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class StartQuiz extends Component {

    render() {
        return (
            <View>
                <Text> StartQuiz </Text>
                <Text>⛔Sorry, you cannot take this quiz because there are no cards in this deck.⛔</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz)
