import React, { Component, PropTypes } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class NewAccountInput extends Component {
  static propTypes = {
    seed: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      text: this.props.seed
    }
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        editable={true}
        multiline={true}
        autoFocus={true}
        returnKeyType="default"
        numberOfLines={6}
        fontSize={16}
        onChangeText={(text) => {
          this.setState({
            text: text
          })
          this.props.onChangeText(text)
        }}
        value={this.state.text}
        maxLength={100}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 200,
    fontWeight: 'bold'
  },
})