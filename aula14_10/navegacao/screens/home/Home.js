import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Home</Text>
      <Button
        title="Voltar para Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}