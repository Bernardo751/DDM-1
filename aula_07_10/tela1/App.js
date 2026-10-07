import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.scflex}>
      <View style={styles.container}>
        <Text>Digite aqui</Text>
        <TextInput placeholder="teste" />
        <Button onPress="" title="botão" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scflex: {
    flex: 1,
    backgroundColor: '#cfdb2a',
  },
  container: {
    flex: 1,
    backgroundColor: '#0b0a0a',
    alignItems: 'center',
  },
});