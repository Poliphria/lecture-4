import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, { compareNames } from './contacts'
import Row from './Row.js'

export default class App extends React.Component {
  state = {
    showContacts: false
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  renderItem = (obj) => <Row {...obj.item}/>

  render() {
    return (
      <View style={styles.container}>
        <Button title='toggle contacts' onPress={this.toggleContacts} />
        <Button title='sort' onPress={this.sort} />
        {this.state.showContacts && (
          <FlatList
            renderItem={this.renderItem}
            data={contacts}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingRight: 8,
    paddingLeft: 8
  }
});