import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Platform } from 'react-native';

const users = [
  { pseudo: 'Jean', mdp: '1234' },
  { pseudo: 'Marie', mdp: 'abcd' },
  { pseudo: 'Toi', mdp: 'admin' },
];

export default function LoginScreen() {
  const [pseudo, setPseudo] = useState('');
  const [mdp, setMdp] = useState('');

  const handleLogin = () => {
    const user = users.find(u => u.pseudo === pseudo && u.mdp === mdp);
    if (user) {
      Alert.alert('Santé !', `Bienvenue ${pseudo} !`);
    } else {
      Alert.alert('Oups...', 'Pseudo ou mot de passe incorrect');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/beer glass.jpg')} // Chemin corrigé
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Contenu principal */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BANC DE TOUCHE</Text>
          <Text style={styles.subtitle}>Santé, connecte-toi !</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          value={pseudo}
          onChangeText={setPseudo}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={mdp}
          onChangeText={setMdp}
          secureTextEntry
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Un verre ? 🍺</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8a4af3', // Violet pour un contraste fun
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8a4af3',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
