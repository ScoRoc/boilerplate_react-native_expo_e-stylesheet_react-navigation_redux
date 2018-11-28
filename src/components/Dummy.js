import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Dummy = props => {
  return (
    <View>
      <Text style={styles.text}>Yo, I'm a Dummy component</Text>
    </View>
  )
};

const styles = EStyleSheet.create({
  text: {
    color: '$orange',
    fontSize: '18rem'
  }
});
