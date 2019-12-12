import React, { Component } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';

import { contacts } from '../config/data'
import colors from '../config/colors'

class Contact extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.contact.email}</Text>
      </View>
    )
  }
}

class Contacts extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ backgroundColor: colors.background }}
          data={contacts}
          keyExtractor={item => item.email}
          renderItem={({ item }) => <Contact contact={item} />}
        />
      </View>
    );
  }
}

export default Contacts