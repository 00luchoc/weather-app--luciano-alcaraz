import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

interface CitySearchProps {
  onAddCity: (city: string) => Promise<void>;
}

export default function CitySearchList({ onAddCity }: CitySearchProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="BUSCAR CIUDAD..."
          placeholderTextColor="#aaa"
          value={inputValue}
          onChangeText={setInputValue}
          testID="new-item-input"
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => { onAddCity(inputValue); setInputValue(''); }}
          testID="add-city-button"
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  inputWrapper: { 
    flexDirection: 'row', 
    borderBottomWidth: 3, 
    borderColor: 'black', 
    alignItems: 'center',
    paddingBottom: 5
  },
  input: { 
    flex: 1, 
    fontSize: 18, 
    fontWeight: '900', 
    letterSpacing: 2,
    color: 'black' 
  },
  button: { padding: 10 },
  buttonText: { fontSize: 30, fontWeight: 'bold' }
});