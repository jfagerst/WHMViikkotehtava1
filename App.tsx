import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 0
  const lower: number = ageAsNumber > 0 ? (220-ageAsNumber) * 0.65 : 0
  const upper: number = ageAsNumber > 0 ? (220-ageAsNumber) * 0.85 : 0

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.field}>Enter your age:</Text>
      <TextInput
        placeholder='Enter age'
        keyboardType='number-pad'
        style={styles.field}
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.field}>Lower limit: {lower.toFixed()} bpm</Text>
      <Text style={styles.field}>Upper limit: {upper.toFixed()} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24
  },
  field: {
    marginVertical: 8
  }
});
