import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [saudacao, setSaudacao] = useState('');
  const [mensagem, setMensagem] = useState('');

  const obterSaudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const atualizarSaudacao = () => {
    if (nome.trim() !== '') {
      const saudacaoAtual = obterSaudacao();
      setSaudacao(`${saudacaoAtual}, ${nome}!`);
      setMensagem(`Bem-vindo(a) ao nosso App, ${nome}!`);
    }
  };

  const limpar = () => {
    setNome('');
    setSaudacao('');
    setMensagem('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1518081461904-ecc1e9a1d56b?auto=format&fit=crop&w=800&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.inner}>
          <Text style={styles.title}> Saudação Personalizada</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />

          <View style={styles.buttonContainer}>
            <Button title="Enviar" onPress={atualizarSaudacao} color="#4CAF50" />
            <Button title="Limpar" onPress={limpar} color="#f44336" />
          </View>

          {saudacao !== '' && <Text style={styles.saudacao}>{saudacao}</Text>}
          {mensagem !== '' && <Text style={styles.mensagem}>{mensagem}</Text>}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  saudacao: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  mensagem: {
    fontSize: 18,
    color: '#ddd',
    textAlign: 'center',
  },
});

export default App;
